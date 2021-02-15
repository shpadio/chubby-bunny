import React, { useState } from 'react';
// import { useHistory } from 'react-router';

function Login() {
  // const history = useHistory();
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

  const loginHandler = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/auth/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then((result) => result.json())
      .then((user) => console.log(user))
      .catch(() => setError('Ошибка входа'));
  };

  return (

        <div style={{
          maxWidth: '20%',
          margin: 'auto'
        }}>
            <form onSubmit={loginHandler} style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column'
            }}>
                <input placeholder="Email" onChange={inputHandler} name="email"/>
                <input placeholder="Password" type="password" onChange={inputHandler}
                       name="password"/>
                <button>Войти</button>
                <div>{error}</div>
            </form>
        </div>
  );
}

export default Login;
