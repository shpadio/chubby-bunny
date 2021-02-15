import React from 'react';

function Logout() {
  const logoutHandler = () => {
    fetch('http://localhost:4000/auth/logout');
  };

  return (
        <div>
            <button onClick={logoutHandler}>Выйти</button>
        </div>
  );
}

export default Logout;
