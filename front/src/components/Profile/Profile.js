import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initProfileFetchAC } from '../../redux/Thunk/authFetchesAC';
import Change from './Change';




function Profile() {
  const dispatch = useDispatch();
  const [change, setChange] = useState(false);

  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    dispatch(initProfileFetchAC(user));
  }, [user.name]);

  const orders = useSelector((state) => state.auth.user.orders);




  return (
      <div>
      <div style={{
        display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-evenly', marginTop: '50px'
      }}>
<h3>История заказов:</h3>
                <ul>
                    { orders && orders.map(((el) => <p key={performance.now()}>
                        <li > <span>Дата: {el.dateOfOrder}</span></li>
                        <li > <span>Номер: {el.orderNumber}</span></li>
                        <li ><span>Стоимость: {el.price} руб</span></li>
                    </p>)) }
                </ul>
        </div>
           <div>
              <div>{user.name}</div>
              <div>{user.email}</div>
               {
                   change ? <Change/> : ''
               }

              <button onClick={() => setChange(!change)}>Изменить данные</button>
           </div>
      </div>
  );
}

export default Profile;
