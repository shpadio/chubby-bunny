import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import axios from 'axios';
// import { ADD_PRODUCT } from '../../redux/types';

function AdminDashboard() {
  // const dispatch = useDispatch();
  const [state, setState] = useState({ file: '' });

  const formHandler = (e) => {
    e.preventDefault();

    const {
      title: { value: title },
      description: { value: description },
      price: { value: price }
    } = e.target;
    console.log(state.file.name);
    const json = JSON.stringify({
      title, description, price
    });
    console.log(json);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('file', state.file);

    axios.post(`${process.env.REACT_APP_URL}/profile/`, formData, {
      headers: {
        'Content-Type': 'Application/json'
      }
    });
    // .then(({ data }) => {
    //   dispatch({
    //     type: ADD_PRODUCT,
    //     payload: {
    //       description: data.description,
    //       price: data.price,
    //       title: data.title,
    //       file: state.file
    //     }
    //   });
    // });
  };
  const onFileChange = (e) => {
    setState({ file: e.target.files[0] });
  };
  // const formHandler = (event) => {
  //   event.preventDefault();
  //
  //   const {
  //     title: { value: title },
  //     description: { value: description },
  //     price: { value: price },
  //     file: { value: file }
  //   } = event.target;
  //   fetch(`${process.env.REACT_APP_URL}/profile/`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'Application/json'
  //     },
  //     body: JSON.stringify({
  //       title, description, price, file
  //     })
  //   })
  //     .then((res) => res.json())
  //     .then((data) => dispatch({
  //       type: ADD_PRODUCT,
  //       payload: {
  //         description: data.description,
  //         price: data.price,
  //         title: data.title,
  //         file: data.file
  //       }
  //     }));
  // };
  return (
        <div>
            <form onSubmit={formHandler} method="POST" enctype="multipart/form-data" action="/profile">
                <input type="text" name="title" placeholder="Название"/>
                <input type="text" name="description" placeholder="Описание"/>
                <input type="number" name="price" placeholder="Цена"/>
                <input type="file" name="file" onChange={onFileChange}/>
                <button type="submit">Загрузить</button>
            </form>
        </div>
  );
}

export default AdminDashboard;
