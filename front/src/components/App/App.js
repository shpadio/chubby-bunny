import React from 'react';
import './App.css';
import Navbar from "../Navbar/Navbar";
import Login from "../Auth/Login/Login";
import SignUp from "../Auth/SignUp/SignUp";
import Order from "../Order/Order";
import Logout from "../Auth/Logout/Logout";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Login/>
            <SignUp/>
            <Logout/>
            <Order/>
        </div>
    );
}

export default App;
