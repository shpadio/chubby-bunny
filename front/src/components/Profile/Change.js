import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authErrorAC, updateDataAC } from '../../redux/AC/authAC';

function Change() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const error = useSelector((state) => state.auth.authError);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);



  const changeHandler = (event) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_URL}/profile/${user._id}`, {
      method: 'put',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ name, email })
    }).then((response) => {
      if (response.status === 200) {
        dispatch(updateDataAC({ name, email }));
      } else {
        dispatch(authErrorAC('Такая почта уже зарегистрирована!'));
      }
    });
  };

  return (
        <div>
            <form onSubmit={changeHandler}>
                <input onChange={(e) => setName(e.target.value)} placeholder="Изменить имя"/>
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Изменить почту"/>
                <button>Записать</button>
            </form>
            <div>{error}</div>
        </div>

  );
}

export default Change;
