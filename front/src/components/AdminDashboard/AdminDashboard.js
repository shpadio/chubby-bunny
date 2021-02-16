import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { ADD_PRODUCT } from '../../redux/types';

function AdminDashboard() {
  const dispatch = useDispatch();
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
    })
      .then(({ data }) => {
        dispatch({
          type: ADD_PRODUCT,
          payload: {
            description: data.description,
            price: data.price,
            title: data.title,
            file: state.file
          }
        });
      });
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
        <section style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', padding: '30px'
        }}>
            <form onSubmit={formHandler} method="POST" enctype="multipart/form-data" action="/profile" style={{
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
                    <form className="col s12">
                        <div className="row" style={{
                          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
                        }}>
                            <div className="input-field col s12">
                                <input type="number" name="price" placeholder="Цена" id="textarea1" className="materialize-textarea"></input>
                            </div>
                            <div className="input-field col s12">
                                <textarea type="text" name="description" placeholder="Описание" id="textarea1" className="materialize-textarea"></textarea>
                            </div>
                            <div className="input-field col s12">
                                <input type="file" name="file" onChange={onFileChange} className="materialize-textarea"></input>
                            </div>
                            <div className="input-field col s12">
                                <button className="waves-effect waves-light btn-small" type="submit">Загрузить</button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <input /> */}

            </form>
        </section>
  );
}

export default AdminDashboard;
