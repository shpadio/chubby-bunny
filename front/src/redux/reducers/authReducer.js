import {
  LOGOUT, AUTH_SUCCESSFULLY, INIT_PROFILE, AUTH_ERROR
} from '../types';

const windowState = JSON.parse(window.localStorage.getItem('state'));
let preloadState = {};
if (windowState && windowState.auth) {
  preloadState = {
    isAuth: windowState.auth.isAuth,
    user: windowState.auth.user
  };
} else {
  preloadState = { isAuth: false, user: {} };
}

const authReducer = (state = preloadState, action) => {
  switch (action.type) {
    case AUTH_SUCCESSFULLY:
      return {
        ...state, isAuth: true, user: action.payload
      };
    case AUTH_ERROR:
      return { ...state, authError: action.payload };

    case INIT_PROFILE:
      return { ...state, user: { ...state.user, orders: action.payload } };
    case LOGOUT:
      window.localStorage.removeItem('state');
      window.localStorage.removeItem('token');
      return {
        ...state, isAuth: false, user: { }
      };
    default:
      return state;
  }
};

export default authReducer;
