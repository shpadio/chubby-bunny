import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Statistics.css';


function Statistics() {
  const statistics = useSelector((state) => state.admin.statistics);

  return (
    <div className={styles.form}>
      <h3>Статистика</h3>
      <p>Количество загеристрированных клиентов:{statistics.users.length}</p>
      <p>Общее количество заказов:{statistics.orders.length}</p>
      <p>Сумма выручки:{statistics && statistics.orders.map((el) => el.price).reduce((a, b) => a + b)}</p>
    </div>
  );
}

export default Statistics;
