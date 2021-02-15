import React, { useState } from 'react';

function SignUp() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  });

  const inputHandler = ({ target: { email, password, value } }) => {
    setInputs({
      ...inputs,
      [email]: value,
      [password]: value
    });
  };

  const [error, setError] = useState('');

  const { name, email, password } = inputs;

  const signupHandler = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/auth/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    }).then((res) => res.json())
      .then((user) => console.log(user))
      .catch(() => setError('Ошибка регистрации'));
  };

  return (
      <form onSubmit={signupHandler}>
          <div className="uk-margin">
              <div className="uk-inline">
                  <p className="uk-form-icon uk-form-icon-flip" uk-icon="icon: pencil"></p>
                  <input onChange={inputHandler} placeholder="Name" type="password" onChange={inputHandler} name="name" className="uk-input" type="text"/>
              </div>
          </div>
          <div className="uk-margin">
              <div className="uk-inline">
                  <p className="uk-form-icon uk-form-icon-flip" uk-icon="icon: pencil"></p>
                  <input placeholder="Email" onChange={inputHandler} name="email" className="uk-input" type="text"/>
              </div>
          </div>
          <div className="uk-margin">
              <div className="uk-inline">
                  <p className="uk-form-icon uk-form-icon-flip" uk-icon="icon: link"></p>
                  <input placeholder="Password" type="password" onChange={inputHandler} name="password" className="uk-input" type="text"/>
              </div>
          </div>
          <button className="uk-button uk-button-primary">Зарегистрироваться</button>
          <div>{error}</div>
      </form>
  );
}

export default SignUp;
