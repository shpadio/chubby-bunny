import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutFetchAC } from '../../../redux/AC/authAC';

function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    logoutFetchAC(dispatch);
  }, []);

  return (
        <div>
        </div>
  );
}

export default Logout;
