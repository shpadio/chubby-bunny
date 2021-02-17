import { ORDER_PRODUCT, INIT_PROFILE } from '../types';

const windowState = JSON.parse(window.localStorage.getItem('state'));
let preloadState = {};
if (windowState && windowState.customer) {
  preloadState = {
    orders: windowState.customer.orders
  };
} else {
  preloadState = { orders: [] };
}

const customerReducer = (state = preloadState, action) => {
  switch (action.type) {
    case INIT_PROFILE:
      return { ...state };

    case ORDER_PRODUCT:
      return { ...state, orders: [...state.orders, action.payload] };
    default:
      return state;
  }
};

export default customerReducer;
