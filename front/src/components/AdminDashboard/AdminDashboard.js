import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD_PRODUCT } from '../../redux/types';

function AdminDashboard() {
  const dispatch = useDispatch();
  const formHandler = (event) => {
    event.preventDefault();

    const {
      title: { value: title },
      description: { value: description },
      price: { value: price }
    } = event.target;
    fetch(`${process.env.REACT_APP_URL}/profile/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({ title, description, price })
    })
      .then((res) => res.json())
      .then((data) => dispatch({
        type: ADD_PRODUCT,
        payload: {
          description: data.description,
          price: data.price,
          title: data.title
        }
      }));
  };

  return (
        <div>
            <form onSubmit={ formHandler } method="POST" encType="multipart/form-data">
                <input type="text" name="title" placeholder="Название"/>
                <input type="text" name="description" placeholder="Описание"/>
                <input type="number" name="price" placeholder="Цена"/>
                <input type="file" name="uploader"/>
                <button type="submit">Загрузить</button>
            </form>
        </div>
  );
}

export default AdminDashboard;
