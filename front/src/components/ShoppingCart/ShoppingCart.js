import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ORDER } from '../../redux/types';

function ShoppingCart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.customer.orders);
  const user = useSelector((state) => state.auth.user._id);
  const [totalPrice, setTotalPrice] = useState(0);
  const [toBuy, setToBuy] = useState(null);

  useEffect(() => {
    if (products.length >= 1) {
      setTotalPrice(
        () => products.map((el) => el.price).reduce((a, b) => a + b)
      );
    } else setTotalPrice(0);

    products.forEach((el) => { el.quantity = 1; });
    const result = Object.values(products.reduce((r, {
      key, _id, file, title, description, quantity, price
    }) => {
      r[title] = r[title] || {
        key, _id, file, title, description, quantity, price: 0
      };
      r[title].price += price;
      r[title].quantity += quantity;
      return r;
    }, {}));
    setToBuy(result);
  }, [products]);

  const deleteHandler = (event) => {
    event.preventDefault();
    dispatch({ type: 'DELETE_ITEM', payload: event.target.parentNode.id });
  };


  console.log(toBuy);

  const buyHandler = () => {
    if (toBuy.length > 0) {
      fetch(`${process.env.REACT_APP_URL}/cart/${user}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          user, toBuy, totalPrice
        })
      }).then((response) => {
        if (response.status === 200) {
          dispatch({ type: ORDER });
        }
      });
    } else {
      alert('Оформи заказ!');
    }
  };

  return (
    <section style={{ width: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
      <h3 style={{ width: '300px', marginBottom: '50px' }}>Ваш заказ:</h3>

      {toBuy && toBuy.map((product) => <div style={{ display: 'flex' }} id={product.uniqueID} key={product.uniqueID}>
        <div style={{ width: '200px' }}>
          <img src={product.file} style={{
            maxWidth: '150px',
            maxHeight: '200px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }} />
        </div>
        <div style={{ width: '200px', paddingTop: '100px' }}>
          {product.title}
        </div>
        <div style={{ width: '290px', paddingTop: '100px' }}>
          {product.description}
        </div>
        <div style={{ width: '100px', paddingLeft: '50px', paddingTop: '100px' }}>
          {product.quantity - 1} шт
        </div>
        <div style={{ width: '100px', paddingLeft: '20px', paddingTop: '100px' }}>
          {product.price} руб
                        </div>
        <button onClick={deleteHandler} className="waves-effect red lighten-2 btn" style={{
          marginTop: '90px', marginBottom: '5px', color: 'white'
        }}>
          Удалить
        </button>
      </div>)}
      <div style={{ marginLeft: '87%', marginBottom: '15px', fontWeight: 'bold' }}>
        Итого: {totalPrice} руб
                </div>
      <button onClick={buyHandler} className="waves-effect blue lighten-4 btn" style={{
        marginTop: '5px', marginBottom: '5px', color: '#435467', marginLeft: '87%', width: '125px'
      }} type="submit">
        Заказать
                </button>
    </section>
  );
}

export default ShoppingCart;
