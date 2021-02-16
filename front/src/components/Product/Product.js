import React from 'react';
import { useDispatch } from 'react-redux';
import { ORDER_PRODUCT } from '../../redux/types';

function Product({ product }) {
  const dispatch = useDispatch();
  const buyHandler = (event, title, price) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_URL}/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ title, price })
    }).then((response) => response.json())
      .then((() => dispatch({ type: ORDER_PRODUCT, payload: { title, price } })));
  };

  return (
        <div className="row">
            <div className="col s12 m6" style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="card" style={{
                  width: '400px', height: '300px', border: '5px pink solid', borderRadius: '10%'
                }}>
                    <form onSubmit={(event) => { buyHandler(event, product.title, product.price); }}
                        style={{
                          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
                        }} className="card-image">
                        <img src="images/sample-1.jpg"/>
                        <div>
                            <p className="card-title" name="title">{product.title}</p>
                        </div>
                        <div>
                            <p className="card-title" name="price"> {product.price}</p>
                        </div>
                        <div className="card-content">
                            <p>{product.description}</p>
                        </div>
                        <button style={{ maxWidth: '100px' }} className="waves-effect waves-light btn-small">
                            Купить
                        </button>
                    </form>
                </div>
            </div>
        </div>
  );
}

export default Product;
