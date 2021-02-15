import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../../redux/types';

function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/auth/logout`)
      .then(() => dispatch({ type: LOGOUT }));
  });

  return (
        <div>
        </div>
  );
}

export default Logout;
