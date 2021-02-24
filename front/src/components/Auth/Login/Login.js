import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loginFetchAC } from '../../../redux/AC/authAC';

function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const error = useSelector((state) => state.auth.authError);


  const emailHandler = (event) => {
    setEmail(() => event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(() => event.target.value);
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    dispatch(loginFetchAC({ email, password }));
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
