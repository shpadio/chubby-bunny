import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INIT_PROFILE } from '../../redux/types';

function Profile() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const id = user._id;
  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/profile/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: INIT_PROFILE, payload: data }));
  }, [dispatch]);

  const orders = useSelector((state) => state.auth.user.orders);

  return (
        <div>
           Your orders:
                <ul>
                    {orders && orders.map(((el) => <p key={el._id}>
                        <li >{el.price}</li>
                        <li >{el.dateOfOrder}</li>
                    </p>)) }
                </ul>

        </div>
  );
}

export default Profile;
