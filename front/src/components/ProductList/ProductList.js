import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Product/Product';
import { INIT_PRODUCTS } from '../../redux/types';

function ProductList() {
  const dispatch = useDispatch();


  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: INIT_PRODUCTS, payload: data }));
  }, []);

  let products = useSelector((state) => state.admin.products);
  products = products.filter((el) => el.visible);


  return (

        <div>
          <div style={{
            display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '50px'
          }}>
          {products && products.map(((product) => <Product key={product._id} product={product}/>))}
        </div>
        </div>
  );
}

export default ProductList;
