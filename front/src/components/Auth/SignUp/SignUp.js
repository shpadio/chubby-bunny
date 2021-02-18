import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { AUTH_SUCCESSFULLY } from '../../../redux/types';

function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  });
  const handleChange = ({ target: { name, value } }) => {
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const { name, email, password } = inputs;

  const [error, setError] = useState('');

  const signupHandler = (event) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    }).then((res) => res.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem('token', data.token);
          dispatch({ type: AUTH_SUCCESSFULLY, payload: data.user });
        } else {
          history.push('/');
        }
      })
      .catch((err) => setError(err));
  };

  return (

        <div className="column" style={{
          display: 'flex', justifyContent: 'center', maxWidth: '25%', margin: 'auto'
        }}>
            <form className="col s12" onSubmit={signupHandler}>
                <div className="column">
                    <div className="input-field col s6">
                        <input onChange={handleChange} name="name" placeholder="Name" type="text"
                               className="validate"/>
                    </div>
                    <div className="input-field col s6">
                        <input onChange={handleChange} name="email" placeholder="E-mail" type="text"
                               className="validate"/>
                    </div>
                </div>
                <div className="input-field col s6">
                    <input placeholder="Password" type="password" onChange={handleChange} name="password"
                           className="validate"/>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">
                    <i className="material-icons">Зарегистрироваться</i>
                </button>
                <div>{error}</div>
            </form>
        </div>

  );
}

export default SignUp;
