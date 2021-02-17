import React from 'react';
import { useSelector } from 'react-redux';

function ShoppingCart() {
  const products = useSelector((state) => state.customer.orders);

  const buyHandler = () => {
    console.log('HUY');
  };

  return (
      <section>
        {products && products.map((product) => <div className="row">
             <div className="col s12 m12">
                    <div className="card">
                        <form style={{ width: '300px', height: '400px' }} onSubmit={(event) => {
                          buyHandler(event,
                            product.title,
                            product.price,
                            product.description,
                            product.file);
                        }}>
                      <span className="card-content" name="title" style={{
                        color: 'black',
                        fontWeight: 'bold'
                      }}>
               {product.title}
            </span>
                            <div className="card-content" style={{ height: '100px' }}>
                                 <div>{product.description}</div>
                            </div>
                            <div className="card-action" name="price" style={{ height: '80px', color: 'black' }}>
                                 {product.price} руб
                            </div>
                            <button type="submit" className="btn-floating halfway-fab waves-effect waves-light red"
                                    sq="true">
                                <i className="material-icons"><i className="fas fa-shopping-cart"></i>
                                </i>
                            </button>
                        </form>
                    </div>
                </div>
        </div>)}
      </section>
  );
}

export default ShoppingCart;
