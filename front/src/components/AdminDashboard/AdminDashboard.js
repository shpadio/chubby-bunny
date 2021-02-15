import React from 'react';

function AdminDashboard() {
  const formHandler = (event) => {
    event.preventDefault();

    const {
      name: { value: name },
      description: { value: description },
      price: { value: price }
    } = event.target;
    console.log(name, description, price);
  };

  return (
        <div>
            <form onSubmit={formHandler} method="post" enctype="multipart/form-data">
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
