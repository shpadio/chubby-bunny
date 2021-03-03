/* eslint-disable no-console */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Compressor from 'compressorjs';
import { addProductFetchAC, hideProductsFetchAC } from '../../redux/Thunk/adminFetchesAC';

function ItemsHandling() {
  const dispatch = useDispatch();
  const [pic, setPic] = useState({ file: '' });
  const products = useSelector((state) => state.admin.products);
  const [error, setError] = useState('');


  const hideHandler = (event) => {
    const { id } = event.target;
    dispatch(hideProductsFetchAC(id, setError));
  };

  const formHandler = (event) => {
    event.preventDefault();
    const {
      title: { value: title },
      description: { value: description },
      price: { value: price }
    } = event.target;
    if (!pic.file) {
      return;
    }
    // eslint-disable-next-line no-new
    new Compressor(pic.file, {
      quality: 1,
      height: 600,
      success(result) {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('file', result, result.name);
        dispatch(addProductFetchAC(formData));
      },
      error(err) {
        console.log(err.message);
      }
    });
  };

  const onFileChange = (e) => {
    setPic({ file: e.target.files[0] });
  };




  return (
    <>
      <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>Продукты в наличии:</div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {products && products.map((el) => <ul key={performance.now()}>
            <li>
              <p>{el.title}</p>
              <p><img style={{ width: '150px', height: '150px' }} src={el.file} /></p>
              <p>{el.price} руб</p>
              {
                el.visible ? <button id={el._id} onClick={
                  (event) => hideHandler(event)}>Скрыть
                                 </button> : <button id={el._id} onClick={
                    (event) => hideHandler(event)}>Показать
                                </button>
              }

            </li>
          </ul>)}
          <span>{error}</span>
        </div>

        <div>
          <form onSubmit={formHandler} method="POST" encType="multipart/form-data" action="/profile" style={{
            width: '450px',
            padding: '30px',
            marginRight: '50px',
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
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <div className="input-field col s12">
                    <input required={true} type="number" name="price" placeholder="Цена"
                      id="textarea1" className="materialize-textarea"></input>
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
                    <button className="waves-effect waves-light btn-small" type="submit">Загрузить
                                        </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ItemsHandling;
