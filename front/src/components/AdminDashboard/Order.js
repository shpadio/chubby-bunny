import React from 'react';

function Order({ orders }) {
  console.log(orders);
  return (
        <div>
            {orders && orders.map((el) => <ul key={el.orderNumber}>
                <li><span>Имя клиента:{el.customer.name}</span></li>
                <li><span>Почта клиента:{el.customer.email}</span></li>
                <li><span>Дата: {el.dateOfOrder}</span></li>
                <li><span>Номер: {el.orderNumber}</span></li>
                <li><span>Стоимость: {el.price} руб</span></li>
                <li><span>Позиции: <ul>{el.items && el.items.map((newEl) => <li>{newEl.title}</li>)}</ul></span></li>
            </ul>)}
        </div>
  );
}

export default Order;
