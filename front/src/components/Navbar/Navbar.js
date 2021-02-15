import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
      <nav className="uk-navbar-container uk-margin" uk-navbar="mode: click">
          <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                  <li><Link to='/'>Домой</Link></li>
                  <li><Link to='/login'>Войти</Link></li>
                  <li><Link to='/signup'>Зарегистрироваться</Link></li>
              </ul>

          </div>
      </nav>

  );
}

export default Navbar;
