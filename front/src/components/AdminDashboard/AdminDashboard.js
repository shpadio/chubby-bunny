
import {
  Route, Link, Switch, BrowserRouter as Router
} from 'react-router-dom';

import Statistics from './Statistics';
import ItemsHandling from './ItemsHandling';
import OrdersHistoryFinder from './OrdersHistoryFinder';



function AdminDashboard() {
  return (
        <>
            <Router>
                <div style={{ display: 'flex' }}>
                    <div className="collection" style={{
                      display: 'flex', flexDirection: 'column', width: '250px'
                    }}>
                        <Link to='/profile' className="collection-item"
                              style={{ color: 'rgb(67, 84, 103)' }}>Статистика</Link>
                        <Link to='/add_item' className="collection-item" style={{ color: 'rgb(67, 84, 103)' }}>Управление
                            товаром</Link>
                        <Link to='/orders_history' className="collection-item" style={{ color: 'rgb(67, 84, 103)' }}>История
                            заказов</Link>
                    </div>
                    <div>
                        <Switch>
                            <Route path='/profile'>
                                     <Statistics/>
                                </Route>
                            <Route path='/add_item'><ItemsHandling/></Route>
                            <Route path='/orders_history'><OrdersHistoryFinder/></Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </>
  );
}

export default AdminDashboard;
