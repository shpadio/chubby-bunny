import { changeErrorAC, updateDataAC } from '../AC/authAC';


const changeInfoFetchAC = (name, email, user) => (dispatch) => {
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
      dispatch(changeErrorAC('Такая почта уже зарегистрирована!'));
    }
  });
};

export default changeInfoFetchAC;
