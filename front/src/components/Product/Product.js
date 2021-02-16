import React from 'react';
import { useDispatch } from 'react-redux';
import { ORDER_PRODUCT } from '../../redux/types';

function Product({ product }) {
  const dispatch = useDispatch();
  const buyHandler = (event, title, price) => {
    event.preventDefault();
    dispatch({ type: ORDER_PRODUCT, payload: { title, price } });
  };

  return (
        <div className="container" style={{
          maxWidth: '100%', maxHeight: '100%', margin: 'auto', padding: 'auto'
        }}>
          <div className="col s12 m6" style={{ width: '100px' }} >
                <div className="card container" >

                    <form className="card-image" style={{ width: '100px' }} onSubmit={(event) => { buyHandler(event, product.title, product.price); }} >
                        <img src="images/sample-1.jpg"/>
                        <p className="card-title" name="title">{product.title}</p>
                        <p className="card-title" name="price"> {product.price}</p>
                        <button className="btn-floating halfway-fab waves-effect waves-light red"><i
                            className="material-icons">Купить</i></button>
                        <div className="card-content">
                            <p>{product.description}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  );
}

export default Product;
