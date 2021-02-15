import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';
import { useSelector } from 'react-redux';
import Login from '../Auth/Login/Login';
import SignUp from '../Auth/SignUp/SignUp';
import Navbar from '../Navbar/Navbar';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import Profile from '../Profile/Profile';
import Logout from '../Auth/Logout/Logout';
import ProtectedRouter from '../ProtectedRouter';
import ProductList from '../ProductList/ProductList';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const isAdmin = useSelector((state) => state.auth.user.isAdmin);

  return (
        <div>
            <Router>
                <div>
                    <Navbar/>
                </div>
                <Switch>
                    <Route exact path="/">
                        <ProductList/>
                    </Route>
                     <Route path="/login">{isAuth ? <Redirect to='/'/> : <Login/>}</Route>
                     <Route path="/signup">{isAuth ? <Redirect to='/'/> : <SignUp/>}</Route>
                    { isAdmin ? <ProtectedRouter Component={AdminDashboard} path="/profile"/>
                      : <ProtectedRouter Component={Profile} path="/profile"/>}
                    <ProtectedRouter Component={Logout} path="/logout"/>
                </Switch>
            </Router>
        </div>

  );
}

export default App;
