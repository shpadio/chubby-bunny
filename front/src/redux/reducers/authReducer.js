import {
  LOGOUT, AUTH_SUCCESSFULLY, INIT_PROFILE, AUTH_ERROR, UPDATE_DATA, CHANGE_ERROR
} from '../types';

const windowState = JSON.parse(window.localStorage.getItem('state'));
let preloadState = {};
if (windowState && windowState.auth) {
  preloadState = {
    isAuth: windowState.auth.isAuth,
    user: windowState.auth.user
  };
} else {
  preloadState = { isAuth: false, user: {}, authError: null };
}

const authReducer = (state = preloadState, action) => {
  switch (action.type) {
    case AUTH_SUCCESSFULLY:
      return {
        ...state, isAuth: true, user: action.payload
      };
    case AUTH_ERROR:
      return { ...state, authError: action.payload };
    case CHANGE_ERROR:
      return { ...state, changeError: action.payload };
    case INIT_PROFILE:
      return { ...state, user: { ...state.user, orders: action.payload } };
    case UPDATE_DATA:
      return { ...state, user: { ...state.user, name: action.payload.name, email: action.payload.email } };

    case LOGOUT:
      window.localStorage.removeItem('state');
      window.localStorage.removeItem('token');
      return {
        ...state, isAuth: false, user: { }, authError: null, changeError: null
      };
    default:
      return state;
  }
};

export default authReducer;
