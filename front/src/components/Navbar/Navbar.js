import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
        <nav>
            <div className="nav-wrapper" style={{ backgroundColor: '#ec407a', maxHeight: '500px' }} >
                    <img style={{ width: '50px' }} src='/public/logo.png'/>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/'>Домой</Link></li>
                    <li><Link to='/login'>Войти</Link></li>
                    <li><Link to='/logout'>Выйти</Link></li>
                    <li><Link to='/signup'>Зарегистрироваться</Link></li>
                    <li><Link to='/profile'>Личный кабинет</Link></li>
                </ul>
            </div>
        </nav>

  );
}

export default Navbar;
