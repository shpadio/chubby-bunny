import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { ADD_PRODUCT } from '../../redux/types';

function AdminDashboard() {
  const dispatch = useDispatch();
  const [pic, setPic] = useState({ file: '' });
  const [usersCount, setUsersCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const products = useSelector((state) => state.admin.products);

  const formHandler = (e) => {
    e.preventDefault();

    const {
      title: { value: title },
      description: { value: description },
      price: { value: price }
    } = e.target;
    console.log(pic.file.name);
    // const json = JSON.stringify({
    //   title, description, price
    // });
    // console.log(json);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('file', pic.file);

    axios.post(`${process.env.REACT_APP_URL}/admin/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(({ data }) => {
        dispatch({
          type: ADD_PRODUCT,
          payload: {
            description: data.description,
            price: data.price,
            title: data.title,
            file: pic.file
          }
        });
      });
  };
  const onFileChange = (e) => {
    setPic({ file: e.target.files[0] });
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


  const statisticHandler = () => {
    fetch(`${process.env.REACT_APP_URL}/admin`)
      .then((response) => response.json())
      .then((data) => {
        setUsersCount(data.users.length);
        setOrdersCount(data.orders.length);
        setTotalEarnings(data.orders.map((el) => el.price).reduce((a, b) => a + b));
      });
    // .then((data) => dispatch({ type: GET_STATISTICS, payload: data }));
  };
  useEffect(() => {
    statisticHandler();
  }, []);


  const hideHandler = () => {
    console.log('');
  };

  console.log(products);

  return (
        <section style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', padding: '30px'
        }}>
            <div>
                <h3>Статистика</h3>
                <p>Количество загеристрированных клиентов:{usersCount}</p>
                <p>Общее количество заказов:{ordersCount}</p>
                <p>Сумма выручки:{totalEarnings}</p>
            </div>

            <div>
                <h3>Продукты в наличии:</h3>
                {products && products.map((el) => <div key={el._id}>
                    <p>{el.title}</p>
                    <p>{el.price}</p>
                    <button onClick={hideHandler}>Скрыть</button>
                </div>)}
            </div>


            <form onSubmit={formHandler} method="POST" encType="multipart/form-data" action="/profile" style={{
              maxWidth: '35%',
              margin: 'auto',
              padding: '30px',
              border: '10px pink solid',
              borderRadius: '10%',
              alignContent: 'spaceAround',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
                <input type="text" name="title" placeholder="Название"/>
                <div className="row">
                    <div className="col s12">
                        <div className="row" style={{
                          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
                        }}>
                            <div className="input-field col s12">
                                <input required={true} type="number" name="price" placeholder="Цена" id="textarea1"
                                       className="materialize-textarea"></input>
                            </div>
                            <div className="input-field col s12">
                                <textarea required={true} type="text" name="description" placeholder="Описание"
                                          id="textarea1" className="materialize-textarea"></textarea>
                            </div>
                            <div className="input-field col s12">
                                <input type="file" name="file" onChange={onFileChange}
                                       className="materialize-textarea"></input>
                            </div>
                            <div className="input-field col s12">
                                <button className="waves-effect waves-light btn-small" type="submit">Загрузить</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <input /> */}

            </form>
        </section>
  );
}

export default AdminDashboard;
