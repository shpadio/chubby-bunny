import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ORDER_PRODUCT } from '../../redux/types';
import ModalWindow from './ModalWindow';

function Product({ product }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClickToBuy = () => {
    setOpen(false);
    history.push('/cart');
  };
  const handleClickToStay = () => {
    setOpen(false);
  };
  const buyHandler = (event, title, price, description, file) => {
    event.preventDefault();
    setOpen(true);
    fetch(`${process.env.REACT_APP_URL}/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ title, price })
    }).then((response) => response.json())
      .then((() => dispatch({
        type: ORDER_PRODUCT,
        payload: {
          title, price, description, file
        }
      })));
  };

  return (

    <div className="row" >
      <div className="col s12 m12" >
        <div className="card">
          <form style={{ width: '300px', height: '400px' }} onSubmit={(event) => { buyHandler(event, product.title, product.price, product.description, product.file); }} >
            <div className="card-image">
              <img src={product.file} style={{
                maxWidth: '150px',
                maxHeight: '200px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }} />
            </div>
            <span className="card-content" name="title" style={{
              color: 'black',
              fontWeight: 'bold'
            }}>
              {product.title}
            </span>
            <div className="card-content" style={{ height: '100px' }}>
              <div>{product.description}</div>
            </div>
            <div className="card-action" name="price" style={{ height: '80px', color: 'black' }}>
              {product.price} руб
                        </div>
            <button type="submit" className="btn-floating halfway-fab waves-effect waves-light red" sq="true">
              <i className="material-icons"><i className="fas fa-shopping-cart"></i>
              </i>
            </button>
          </form>
        </div>
      </div>
      <ModalWindow
        open={open}
        setOpen={setOpen}
        handleClickToStay={handleClickToStay}
        handleClickToBuy={handleClickToBuy}
      />
    </div>
  );
}

export default Product;
