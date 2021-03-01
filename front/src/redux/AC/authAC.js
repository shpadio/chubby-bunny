
import {
  AUTH_SUCCESSFULLY, INIT_PROFILE, LOGOUT, AUTH_ERROR, UPDATE_DATA, CHANGE_ERROR

} from '../types';

// ACTION CREATORS
export const authSuccesfullyAC = (user) => ({ type: AUTH_SUCCESSFULLY, payload: user });
export const logoutAC = () => ({ type: LOGOUT });
export const authErrorAC = (error) => ({ type: AUTH_ERROR, payload: error });
export const changeErrorAC = (error) => ({ type: CHANGE_ERROR, payload: error });
export const initProfileAC = (orders) => ({ type: INIT_PROFILE, payload: orders });
export const updateDataAC = (data) => ({ type: UPDATE_DATA, payload: data });

