import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../../redux/types';

function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:4000/auth/logout')
      .then(() => dispatch({ type: LOGOUT }));
  });

  return (
        <div>
        </div>
  );
}

export default Logout;
