import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';

import Order from './Order';

function OrdersHistoryFinder() {
  const search = useRef();



  const orders = useSelector((state) => state.admin.statistics.orders);

  const selectOptions = orders.map((el) => ({ value: el.customer.email, label: el.orderNumber }));





  useEffect(() => {
    search.current.focus();
  }, []);

  return (
        <>
            <nav style={{ width: '500px', marginLeft: '200px', backgroundColor: 'white' }}>
                <div className="nav-wrapper">
                    <form>
                        <div className="input-field" style={{ color: 'black' }} >
                             <Select ref={search} options={selectOptions}/>
                        </div>
                    </form>
                </div>
            </nav>
            <div>
                <div>
                     <Order key={performance.now()} orders={orders}/>
                </div>





                {/* {orders && orders.map(((el) => <p key={performance.now()}> */}

                {/*    <ul> */}
                {/*        <li><span>Имя клиента:{el.customer.name}</span></li> */}
                {/*        <li><span>Почта клиента:{el.customer.email}</span></li> */}
                {/*        <li><span>Дата: {el.dateOfOrder}</span></li> */}
                {/*        <li><span>Номер: {el.orderNumber}</span></li> */}
                {/*        <li><span>Стоимость: {el.price} руб</span></li> */}
                {/*         <li><span>Позиции: <ul>{el.items && el.items.map((newEl) => <li>{newEl.title}</li>)}</ul></span></li> */}
                {/*    </ul> */}
                {/* </p>))} */}
            </div>
        </>
  );
}

export default OrdersHistoryFinder;
