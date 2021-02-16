import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INIT_PROFILE } from '../../redux/types';

function Profile() {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.auth.user._id);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/profile/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: INIT_PROFILE, payload: data }));
  }, []);

  return (
        <div>
            <p>Your orders:</p>
        </div>
  );
}

export default Profile;
