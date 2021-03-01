import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpFetchAC } from '../../../redux/Thunk/authFetchesAC';


function SignUp() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.authError);


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

  const signupHandler = (event) => {
    event.preventDefault();
    dispatch(signUpFetchAC({ name, email, password }));
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
                <div>
                    <p>Вы уже зарегистрированы?</p>
                    <Link to="/login">Войти</Link>
                </div>

            </form>

        </div>

  );
}

export default SignUp;
