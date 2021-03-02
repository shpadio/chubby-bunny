import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutFetchAC } from '../../../redux/Thunk/authFetchesAC';


function Logout() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(logoutFetchAC());
  }, []);

  return (
        <div>
        </div>
  );
}

export default Logout;
