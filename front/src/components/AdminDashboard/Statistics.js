import React from 'react';

function Statistics({ usersCount, ordersCount, totalEarnings }) {
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
      <p>Количество загеристрированных клиентов:{usersCount}</p>
      <p>Общее количество заказов:{ordersCount}</p>
      <p>Сумма выручки:{totalEarnings}</p>
    </div>
  );
}

export default Statistics;
