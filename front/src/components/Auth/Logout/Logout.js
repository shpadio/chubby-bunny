import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAC } from '../../../redux/AC/authAC';



function Logout() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(logoutAC());
  }, []);

  return (
        <div>
        </div>
  );
}

export default Logout;
