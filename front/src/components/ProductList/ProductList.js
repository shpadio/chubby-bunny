import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';

function ProductList() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [setProducts]);

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
