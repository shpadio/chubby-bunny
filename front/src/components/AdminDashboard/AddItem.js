import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { ADD_PRODUCT, HIDE_PRODUCT } from '../../redux/types';

function AddItem() {
  const dispatch = useDispatch();
  const [pic, setPic] = useState({ file: '' });
  const products = useSelector((state) => state.admin.products);


  const hideHandler = (event) => {
    dispatch({ type: HIDE_PRODUCT, payload: event.target.id });
  };



  const formHandler = (event) => {
    event.preventDefault();

    const {
      title: { value: title },
      description: { value: description },
      price: { value: price }
    } = event.target;
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
  return (
      <>
        <div>
          <h3>Продукты в наличии:</h3>
          {products && products.map((el) => <ul key={el._id}>
            <li>
              <p>{el.title}</p>
              <p><img style={{ width: '150px', height: '150px' }} src={el.file}/></p>
              <p>{el.price} руб</p>
              <button id={el._id} onClick={(event) => hideHandler(event)}>Скрыть</button>
            </li>
          </ul>)}
        </div>

    <div>
      <form onSubmit={formHandler} method="POST" encType="multipart/form-data" action="/profile" style={{
        width: '700px',
        marginLeft: '120px',
        padding: '30px',
        border: '10px pink solid',
        borderRadius: '15px',
        alignContent: 'spaceAround',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <input type="text" name="title" placeholder="Название" />
        <div className="row">
          <div className="col s12">
            <div className="row" style={{
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
            }}>
              <div className="input-field col s12">
                <input required={true} type="number" name="price" placeholder="Цена" id="textarea1" className="materialize-textarea"></input>
              </div>
              <div className="input-field col s12">
                <textarea required={true} type="text" name="description" placeholder="Описание" id="textarea1" className="materialize-textarea"></textarea>
              </div>
              <div className="input-field col s12">
                <input type="file" name="file" onChange={onFileChange} className="materialize-textarea"></input>
              </div>
              <div className="input-field col s12">
                <button className="waves-effect waves-light btn-small" type="submit">Загрузить</button>
              </div>
            </div>
          </div>
        </div>
        {/* <input /> */}

      </form>
    </div>
        </>
  );
}

export default AddItem;
