import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState(null);

  useEffect(async () => {
    await fetch('http://localhost:4000/')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="row">
        { products && products.map((product) => <div className="col s12 m6">
                <div className="card">
                    <div className="card-image">
                        <img src="images/sample-1.jpg"/>
                        <span className="card-title">{product.title}</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light red"><i
                            className="material-icons">Купить</i></a>
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
