import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AUTH_SUCCESSFULLY } from '../../../redux/types';

function Login() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const inputHandler = ({ target: { name, value } }) => {
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const { email, password } = inputs;

  const loginHandler = async (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/auth/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email, password
      })
    }).then((response) => response.json())
      .then((user) => dispatch({ type: AUTH_SUCCESSFULLY, payload: user }))
      .catch(() => setError('Ошибка входа'));
  };

  return (

      <div className="column" style={{
        display: 'flex', justifyContent: 'center', maxWidth: '25%', margin: 'auto'
      }}>
          <form className="col s12" onSubmit={loginHandler}>
              <div className="column">
                  <div className="input-field col s6">
                      <input onChange={inputHandler}
                             name="email"
                             placeholder="E-mail"
                             type="text"
                             className="validate"
                             value={email}
                      />
                  </div>
              </div>
              <div className="input-field col s6">
                  <input placeholder="Password"
                         type="password"
                         onChange={inputHandler}
                         name="password"
                         className="validate"
                         value={password}
                  />
              </div>
              <button className="btn waves-effect waves-light" type="submit" name="action">
                  <i className="material-icons">Войти</i>
              </button>
                   <div>{error}</div>
          </form>
      </div>
  );
}

export default Login;
