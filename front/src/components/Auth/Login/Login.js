import React, { useState } from 'react';

function Login() {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const inputHandler = ({ target: { email, value } }) => {
    setInputs({
      ...inputs,
      [email]: value
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
        <form onSubmit={loginHandler}>
            <div className="uk-margin">
                <div className="uk-inline">
                    <p className="uk-form-icon" href="#" uk-icon="icon: pencil"></p>
                    <input placeholder="Email" onChange={inputHandler} name="email" className="uk-input" type="text"/>
                </div>
            </div>
            <div className="uk-margin">
                <div className="uk-inline">
                    <p className="uk-form-icon uk-form-icon-flip" uk-icon="icon: link"></p>
                    <input placeholder="Password" type="password" onChange={inputHandler} name="password" className="uk-input" type="text"/>
                </div>
            </div>
            <button className="uk-button uk-button-primary">Primary</button>
            <div>{error}</div>
        </form>

  );
}

export default Login;
