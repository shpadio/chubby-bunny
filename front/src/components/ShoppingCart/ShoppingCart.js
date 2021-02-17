import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function ShoppingCart() {
  const products = useSelector((state) => state.customer.orders);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(products.map((el) => el.price).reduce((a, b) => a + b));
  }, [setTotalPrice]);

  // const buyHandler = () => {
  //   console.log('HUY');
  // };

  return (
    <section style={{ width: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
      <h3 style={{ width: '300px', marginBottom: '50px' }}>Ваш заказ</h3>
      <form style={{ width: '1000px' }}>
      {products && products.map((product) => <div style={{ display: 'flex' }} key={performance.now()}>
          <div style={{ width: '200px' }}>
            <img src={product.file} style={{
              maxWidth: '150px',
              maxHeight: '200px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }} />
          </div>
          <div style={{ width: '200px' }}>
            {product.title}
          </div>
          <div style={{ width: '300px' }}>
            {product.description}
          </div>
          <div style={{ width: '100px' }}>
            {product.price} руб
          </div>
      </div>)}
      <div style={{ marginLeft: '65%', marginBottom: '15px', fontWeight: 'bold' }}>
            Итого: {totalPrice} руб
          </div>
      <a className="waves-effect blue lighten-4 btn" style={{
        marginTop: '5px', marginBottom: '5px', color: '#435467', marginLeft: '65%'
      }} type="submit">
            Оплатить
          </a>
      </form>
    </section>
  );
}

export default ShoppingCart;
