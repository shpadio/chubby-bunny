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
      <div style={{
        display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-evenly', marginTop: '50px'
      }}>
<h3>История заказов:</h3>
                <ul>
                    { orders && orders.map(((el) => <p key={performance.now()}>
                        <li > <span>Дата: {el.dateOfOrder.toString().slice(0, 10)}</span></li>
                        <li > <span>Номер: {el._id.toString().slice(-4)}</span></li>
                        <li ><span>Стоимость: {el.price} руб</span></li>
                    </p>)) }
                </ul>

        </div>
  );
}

export default Profile;
