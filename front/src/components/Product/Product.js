import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from './Product.module.css';
import { ADD_TO_CART_PRODUCT } from '../../redux/types';
import ModalWindow from './ModalWindow';

function Product({ product }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const isAdmin = useSelector(((state) => state.auth.user.isAdmin));


  const handleClickToBuy = () => {
    setOpen(false);
    history.push('/cart');
  };
  const handleClickToStay = () => {
    setOpen(false);
  };


  const putToCartHandler = (event, title,
    price,
    description, file, _id, uniqueID = performance.now().toFixed()) => {
    event.preventDefault();
    console.log(uniqueID);
    if (isAuth) {
      setOpen(true);
      dispatch({
        type: ADD_TO_CART_PRODUCT,
        payload: {
          title, price, description, file, _id, uniqueID
        }
      });
    } else history.push('/signup');
  };



  return (

    <div className="row" >
      <div className="col s12 m12" >
        <div className="card">
          <form className={styles.form} onSubmit={(event) => { putToCartHandler(event, product.title, product.price, product.description, product.file, product._id, product.uniqueID); }} >
            <div className="card-image">
              <img src={product.file} className={styles.img} />
            </div>
            <span className={styles.cardContent} name="title">
              {product.title}
            </span>
            <div className="card-content" style={{ height: '100px' }}>
              <div>{product.description}</div>
            </div>
            <div className="card-action" name="price" style={{ height: '80px', color: 'black' }}>
              {product.price} руб
            </div>
                {!isAdmin ? <button type="submit" className="btn-floating halfway-fab waves-effect waves-light red" sq="true"
                        style={{ zIndex: '0' }}>
                  <i className="material-icons"><i className="fas fa-shopping-cart" style={{ fontSize: '1.3rem' }}></i>
                  </i>
                </button> : null
            }
          </form>
        </div>
      </div>
      {isAuth ? <ModalWindow
        open={open}
        setOpen={setOpen}
        handleClickToStay={handleClickToStay}
        handleClickToBuy={handleClickToBuy}
      /> : null}
    </div>
  );
}

export default Product;
