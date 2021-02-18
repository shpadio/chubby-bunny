import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ShoppingCart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.customer.orders);
  const [totalPrice, setTotalPrice] = useState(0);

  if (products.length >= 1) {
    useEffect(() => {
      setTotalPrice(products.map((el) => el.price).reduce((a, b) => a + b));
    }, [totalPrice]);
  }


  const deleteHandler = (event) => {
    dispatch({ type: 'DELETE_ITEM', payload: event.target.parentNode.id });
  };

  return (
        <section style={{ width: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h3 style={{ width: '300px', marginBottom: '50px' }}>Ваш заказ</h3>
                {products && products.map((product) => <div style={{ display: 'flex' }} id={product.uniqueID} key={product.uniqueID}>
                        <div style={{ width: '200px' }}>
                            <img src={product.file} style={{
                              maxWidth: '150px',
                              maxHeight: '200px',
                              marginLeft: 'auto',
                              marginRight: 'auto'
                            }}/>
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
                        <button onClick={deleteHandler} className="waves-effect red lighten-2 btn" style={{
                          marginTop: '5px', marginBottom: '5px', color: 'white'
                        }}>
                            Удалить
                        </button>
                </div>)}
                <div style={{ marginLeft: '65%', marginBottom: '15px', fontWeight: 'bold' }}>
                    Итого: {totalPrice} руб
                </div>


                <button className="waves-effect blue lighten-4 btn" style={{
                  marginTop: '5px', marginBottom: '5px', color: '#435467', marginLeft: '65%'
                }} type="submit">
                    Оплатить
                </button>
        </section>
  );
}

export default ShoppingCart;
