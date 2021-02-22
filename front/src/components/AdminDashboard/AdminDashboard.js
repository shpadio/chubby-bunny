import React, { useEffect, useState } from 'react';
import {
  Route, Link, Switch, BrowserRouter as Router
} from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Statistics from './Statistics';
import AddItem from './AddItem';
import OrdersHistoryFinder from './OrdersHistoryFinder';


function AdminDashboard() {
  const [usersCount, setUsersCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  // const products = useSelector((state) => state.admin.products);

  const statisticHandler = () => {
    fetch(`${process.env.REACT_APP_URL}/admin`)
      .then((response) => response.json())
      .then((data) => {
        setUsersCount(data.users.length);
        setOrdersCount(data.orders.length);
        setTotalEarnings(data.orders.map((el) => el.price).reduce((a, b) => a + b));
      });
    // .then((data) => dispatch({ type: GET_STATISTICS, payload: data }));
  };
  useEffect(() => {
    statisticHandler();
  }, []);

  return (
    <>
      <Router>
        <div style={{ display: 'flex' }}>
          <div className="collection" style={{
            display: 'flex', flexDirection: 'column', width: '250px'
          }}>
            <Link to='/profile' className="collection-item" style={{ color: 'rgb(67, 84, 103)' }}>Статистика</Link>
            <Link to='/add_item' className="collection-item" style={{ color: 'rgb(67, 84, 103)' }}>Управление товаром</Link>
            <Link to='/orders_history' className="collection-item" style={{ color: 'rgb(67, 84, 103)' }}>История заказов</Link>
          </div>
          <div>
            <Switch>
              <Route path='/profile'><Statistics usersCount={usersCount} ordersCount={ordersCount} totalEarnings={totalEarnings} /></Route>
              <Route path='/add_item'><AddItem /></Route>
              <Route path='/orders_history'><OrdersHistoryFinder /></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default AdminDashboard;
