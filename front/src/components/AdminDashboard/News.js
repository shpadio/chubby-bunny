import React, { useState } from 'react';




function News() {
  const [inputs, setInputs] = useState({
    title: '',
    text: ''
  });

  const inputHandler = ({ target: { name, value } }) => {
    setInputs({
      ...inputs,
      [name]: value

    });
  };


  const { title, text } = inputs;


  const formHandler = (event) => {
    event.preventDefault();

    console.log(title, text);
  };



  const onFileChange = () => {

  };
  return (
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
              <div className="row">
                  <div className="col s12">
                      <input onChange={inputHandler} type="text" name="title" placeholder="Тема"/>
                      <div className="row" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}>
                          <div className="input-field col s12">
                                        <textarea required={true} onChange={inputHandler} type="text" name="text" placeholder="Описание"
                                                  id="textarea1" className="materialize-textarea"></textarea>
                          </div>
                          <div className="input-field col s12">
                              <input type="file" name="file" onChange={onFileChange}
                                     className="materialize-textarea"></input>
                          </div>
                          <div className="input-field col s12">
                              <button className="waves-effect waves-light btn-small" type="submit">Добавить новость
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </form>

        </div>
  );
}

export default News;
