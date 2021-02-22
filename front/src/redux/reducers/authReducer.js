import { LOGOUT, AUTH_SUCCESSFULLY, INIT_PROFILE } from '../types';

const authReducer = (state = { isAuth: false, user: {} }, action) => {
  switch (action.type) {
    case AUTH_SUCCESSFULLY:
      return {
        ...state, isAuth: true, user: action.payload
      };
    case INIT_PROFILE:
      return { ...state, user: { ...state.user, orders: action.payload } };
    case LOGOUT:
      window.localStorage.removeItem('token');
      return {
        ...state, isAuth: false, user: { }
      };
    default:
      return state;
  }
};

export default authReducer;
