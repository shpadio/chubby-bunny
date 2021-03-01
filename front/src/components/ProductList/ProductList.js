import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Product/Product';
import { initProductsFetchAC } from '../../redux/Thunk/adminFetchesAC';


function ProductList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initProductsFetchAC());
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
