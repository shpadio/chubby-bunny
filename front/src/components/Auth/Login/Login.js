import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { AUTH_SUCCESSFULLY } from '../../../redux/types';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const emailHandler = (event) => {
    setEmail(() => event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(() => event.target.value);
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email, password
      })
    }).then((response) => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem('token', data.token);
          dispatch({ type: AUTH_SUCCESSFULLY, payload: data.user });
        } else {
          history.push('/');
        }
      })
      .catch(() => setError('Ошибка входа'));
  };

  return (

        <div className="column" style={{
          display: 'flex', justifyContent: 'center', maxWidth: '25%', margin: 'auto'
        }}>
            <form className="col s12" onSubmit={loginHandler}>
                <div className="column">
                    <div className="input-field col s6">
                        <input onChange={emailHandler}
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
                           onChange={passwordHandler}
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
