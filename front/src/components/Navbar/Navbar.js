import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
        <nav>
            <div className="nav-wrapper" style={{ backgroundColor: '#ec407a', maxHeight: '500px' }}>
                {isAuth
                  ? <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/'>Главная</Link></li>
                    <li><Link to='/profile'>Личный кабинет</Link></li>
                    <li><Link to='/logout'>Выйти</Link></li>
                </ul>
                  : <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/login'>Войти</Link></li>
                    <li><Link to='/signup'>Зарегистрироваться</Link></li>
                </ul>
                }
            </div>
        </nav>

  );
}

export default Navbar;
