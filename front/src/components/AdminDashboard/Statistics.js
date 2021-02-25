import React from 'react';
import { useSelector } from 'react-redux';

function Statistics() {
  const statistics = useSelector((state) => state.admin.statistics);

  return (
    <div style={{
      width: '700px',
      marginLeft: '120px',
      padding: '30px',
      border: '10px pink solid',
      borderRadius: '15px',
      alignContent: 'spaceAround',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h3>Статистика</h3>
      <p>Количество загеристрированных клиентов:{statistics.users.length}</p>
      <p>Общее количество заказов:{statistics.orders.length}</p>
      <p>Сумма выручки:{statistics && statistics.orders.map((el) => el.price).reduce((a, b) => a + b)}</p>
    </div>
  );
}

export default Statistics;
