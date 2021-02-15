import React from 'react';

function AdminDashboard() {
  const formHandler = (event) => {
    event.preventDefault();

    const {
      name: { value: name },
      description: { value: description },
      price: { value: price }
    } = event.target;
    fetch('http://localhost:4000/profile/', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({ name, description, price })
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
        <div>
            <form onSubmit={ formHandler } method="POST" encType="multipart/form-data">
                <input type="text" name="name" placeholder="Название"/>
                <input type="text" name="description" placeholder="Описание"/>
                <input type="number" name="price" placeholder="Цена"/>
                <input type="file" name="uploader"/>
                <button type="submit">Загрузить</button>
            </form>
        </div>
  );
}

export default AdminDashboard;
