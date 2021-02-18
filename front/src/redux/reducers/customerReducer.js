import {
  INIT_PROFILE, ADD_TO_CART_PRODUCT, DELETE_ITEM, ORDER
} from '../types';

const windowState = JSON.parse(window.localStorage.getItem('state'));
let preloadState = {};
if (windowState && windowState.customer) {
  preloadState = {
    orders: windowState.customer.orders
  };
} else {
  preloadState = { orders: '' };
}

const customerReducer = (state = preloadState, action) => {
  switch (action.type) {
    case INIT_PROFILE:
      return { ...state };

    case ADD_TO_CART_PRODUCT:
      return { ...state, orders: [...state.orders, action.payload] };
    case ORDER:
      return { ...state, orders: [0] };

    case DELETE_ITEM:
      return { ...state, orders: [...state.orders.filter((el) => el.uniqueID !== action.payload)] };
    default:
      return state;
  }
};

export default customerReducer;
