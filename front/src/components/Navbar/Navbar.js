import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

function Navbar() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
        <nav>
            <div className="nav-wrapper" style={{ backgroundColor: '#F4A4C7', maxHeight: '500px' }}>
                {isAuth
                  ? <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='/' style={{ color: '#435467' }}>Главная</Link></li>
                        <li><Link to='/cart' style={{ color: '#435467' }}>Корзина</Link></li>
                        <li><Link to='/profile' style={{ color: '#435467' }}>Личный кабинет</Link></li>
                        <li><Link to='/logout' style={{ color: '#435467' }}>Выйти</Link></li>
                    </ul>
                  : <ul style={{ color: '#435467' }} id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='/login' style={{ color: '#435467' }}>Войти</Link></li>
                        <li><Link to='/signup' style={{ color: '#435467' }}>Зарегистрироваться</Link></li>
                    </ul>
                }
            </div>
        </nav>

  );
}

export default Navbar;
