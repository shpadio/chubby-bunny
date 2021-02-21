import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../Auth/Login/Login';
import SignUp from '../Auth/SignUp/SignUp';
import Navbar from '../Navbar/Navbar';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import Profile from '../Profile/Profile';
import Logout from '../Auth/Logout/Logout';
import ProtectedRouter from '../ProtectedRouter';
import ProductList from '../ProductList/ProductList';
import Footer from '../Footer/Footer';
import logo from '../../logo.png';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { AUTH_SUCCESSFULLY } from '../../redux/types';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const isAdmin = useSelector((state) => state.auth.user.isAdmin);
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();


  const verifyToken = () => {
    fetch(`${process.env.REACT_APP_URL}/verify`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ token })
    }).then((response) => response.json())
      .then((user) => dispatch({ type: AUTH_SUCCESSFULLY, payload: user }));
  };

  useEffect(verifyToken, [dispatch]);


  return (
        <div>

            <Router>
                <div>
                    <Navbar/>
                </div>
                <div>
                    <img src={logo} alt={'logo'} style={{
                      maxWidth: '100%', height: '200px', marginLeft: '40%'
                    }}/>
                </div>
                <Switch>
                    <Route exact path="/">
                        <ProductList/>
                    </Route>
                    <Route path="/login">{isAuth ? <Redirect to='/'/> : <Login/>}</Route>
                    <Route path="/signup">{isAuth ? <Redirect to='/'/> : <SignUp/>}</Route>
                    <ProtectedRouter Component={ShoppingCart} path="/cart"/>
                         {isAdmin ? <ProtectedRouter Component={AdminDashboard} path="/profile"/>
                           : <ProtectedRouter Component={Profile} path="/profile"/>}
                          <ProtectedRouter Component={Logout} path="/logout"/>
                </Switch>
            </Router>

            <Footer/>
        </div>

  );
}

export default App;
