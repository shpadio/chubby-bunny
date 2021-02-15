import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
      <div>
          <ul>
              <li>
                  <Link to='/login'>Войти</Link>
              </li>
              <li>
                  <Link to='/signup'>Зарегистрироваться</Link>
              </li>
              <li>
                  <Link to='/'>Домой</Link>
              </li>
          </ul>

      </div>

  );
}

export default Navbar;
