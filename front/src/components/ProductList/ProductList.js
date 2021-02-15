import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ORDER_PRODUCT } from '../../redux/types';

function ProductList() {
  const [products, setProducts] = useState(null);
  const dispatch = useDispatch();

  useEffect(async () => {
    await fetch(`${process.env.REACT_APP_URL}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const buyHandler = () => {
    dispatch({ type: ORDER_PRODUCT, payload: products.map(((el) => el.price)) });
  };

  return (
    <div className="container" style={{
      maxWidth: '100%', maxHeight: '100%', margin: 'auto', padding: 'auto'
    }}>
        { products && products.map((product) => <div className="col s12 m6" style={{ width: '100px' }} >
                <div className="card" >
                    <div className="card-image" style={{ width: '100px' }} >
                        <img src="images/sample-1.jpg"/>
                        <span className="card-title">{product.title}</span>
                        <span className="card-title">{product.price}</span>
                        <button onClick={buyHandler} className="btn-floating halfway-fab waves-effect waves-light red"><i
                            className="material-icons">Купить</i></button>
                    </div>
                    <div className="card-content">
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>)}
    </div>
  );
}

export default ProductList;
