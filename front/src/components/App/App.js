import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';
import Login from '../Auth/Login/Login';
import SignUp from '../Auth/SignUp/SignUp';
import Navbar from '../Navbar/Navbar';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import Profile from '../Profile/Profile';
import Logout from '../Auth/Logout/Logout';

function App() {
  return (
        <div>
            <Router>
                <div>
                    <Navbar/>
                </div>
                <Switch>
                    <Route exact path="/">
                        <AdminDashboard />
                    </Route>
                    <Route path="/logout">
                        <Logout/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/signup">
                        <SignUp/>
                    </Route>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                </Switch>
            </Router>
        </div>

  );
}

export default App;
