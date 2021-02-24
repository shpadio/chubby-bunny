
import {
  AUTH_SUCCESSFULLY, INIT_PROFILE, LOGOUT, AUTH_ERROR

} from '../types';

// ACTION CREATORS
export const authSuccesfullyAC = (user) => ({ type: AUTH_SUCCESSFULLY, payload: user });
export const logoutAC = () => ({ type: LOGOUT });
export const authErrorAC = (error) => ({ type: AUTH_ERROR, payload: error });
export const initProfileAC = (orders) => ({ type: INIT_PROFILE, payload: orders });

// THUNK
export const signUpFetchAC = ({ name, email, password }) => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  }).then((res) => res.json())
    .then((data) => {
      if (data.success) {
        localStorage.setItem('token', data.token);
        dispatch(authSuccesfullyAC(data.user));
      } else {
        dispatch(authErrorAC('Такой пользователь уже существует'));
      }
    });
};



export const loginFetchAC = ({ email, password }) => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      email, password
    })
  }).then((response) => response.json())
    .then((data) => {
      if (data.success) {
        localStorage.setItem('token', data.token);
        dispatch(authSuccesfullyAC(data.user));
      } else {
        dispatch(authErrorAC('Неверный пароль или e-mail!'));
      }
    });
};


export const logoutFetchAC = (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/auth/logout`)
    .then(() => dispatch(logoutAC()));
};


export const initProfileFetchAC = (user) => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/profile/${user._id}`)
    .then((response) => response.json())
    .then((data) => dispatch(initProfileAC(data)));
};

