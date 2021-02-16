import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';

function ProductList() {
  const [products, setProducts] = useState(null);

  useEffect(async () => {
    await fetch(`${process.env.REACT_APP_URL}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
        <div>
          {products && products.map(((product) => <Product key={product._id} product={product}/>))}
        </div>
  );
}

export default ProductList;
