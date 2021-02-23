
import { useState } from 'react';
import {
  AUTH_SUCCESSFULLY, INIT_PROFILE, LOGOUT

} from '../types';

const [error, setError] = useState('');

// ACTION CREATERS
export const authSuccesfullyAC = (user) => ({ type: AUTH_SUCCESSFULLY, payload: user });
export const logoutAC = () => ({ type: LOGOUT });
export const initProfileAC = (orders) => ({ type: INIT_PROFILE, payload: orders });

// THUNK

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
      }
    })
    .catch(() => setError(error));
};



