import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';
import Login from '../Auth/Login/Login';
import SignUp from '../Auth/SignUp/SignUp';
import Navbar from '../Navbar/Navbar';

function App() {
  return (
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/signup">
                        <SignUp/>
                    </Route>
                </Switch>
            </Router>
        </div>

  );
}

export default App;
