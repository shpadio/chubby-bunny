// THUNK
import {
  authErrorAC, authSuccesfullyAC, initProfileAC, logoutAC
} from '../AC/authAC';

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

