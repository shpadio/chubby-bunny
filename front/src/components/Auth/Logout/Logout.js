import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../../redux/types';

function Logout() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    fetch('http://localhost:4000/auth/logout')
      .then(() => dispatch({ type: LOGOUT }));
  };
  useEffect(() => {
    logoutHandler();
  });

  return (
        <div>
            <button onClick={logoutHandler}>Выйти</button>
        </div>
  );
}

export default Logout;
