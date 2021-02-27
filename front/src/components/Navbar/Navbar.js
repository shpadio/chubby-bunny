import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

function Navbar() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const isAdmin = useSelector((state) => state.auth.user.isAdmin);
  const count = useSelector((state) => state.customer.orders.length);

  return (
    <nav>
      <div className="nav-wrapper" style={{ backgroundColor: '#F4A4C7', maxHeight: '500px' }}>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to='/' style={{ color: '#435467' }}>Главная</Link></li>
          <li><Link style={{ color: '#435467' }} to='/about'>О нас</Link></li>
          {isAuth ? <><li><Link to='/cart' style={{ color: '#435467' }}><span style={{
            width: '25px', height: '25px', marginRight: '10px', fontSize: '20px', font: 'strong'
          }}>{count || null}</span>Корзина</Link></li>
                   <li><Link to='/profile' style={{ color: '#435467' }}>{ isAdmin ? <span>Админка</span> : <span>Личный кабинет</span> }</Link></li>
            <li><Link to='/logout' style={{ color: '#435467' }}>Выйти</Link></li> </>
            : <><li><Link to='/login' style={{ color: '#435467' }}>Войти</Link></li>
              <li><Link to='/signup' style={{ color: '#435467' }}>Зарегистрироваться</Link></li> </>}

        </ul>
      </div>
    </nav>

  );
}

export default Navbar;
