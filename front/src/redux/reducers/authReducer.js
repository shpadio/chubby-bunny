import { LOGOUT, AUTH_SUCCESSFULLY } from '../types';

const windowState = JSON.parse(window.localStorage.getItem('state'));
let preloadState = {};
if (windowState && windowState.auth) {
  preloadState = {
    isAuth: windowState.auth.isAuth,
    user: windowState.auth.user,
    token: windowState.auth.token
  };
} else {
  preloadState = { isAuth: false, user: { email: '', name: '' }, token: null };
}

const authReducer = (state = preloadState, action) => {
  switch (action.type) {
    case AUTH_SUCCESSFULLY:
      return {
        ...state, isAuth: true, user: action.payload.user, token: action.payload.token
      };
    case LOGOUT:
      window.localStorage.removeItem('state');
      return {
        ...state, isAuth: false, user: { email: '', name: '' }, token: null
      };
    default:
      return state;
  }
};

export default authReducer;
