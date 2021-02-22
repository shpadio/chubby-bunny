import {
  ADD_TO_CART_PRODUCT, DELETE_ITEM, ORDER
} from '../types';

const customerReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART_PRODUCT:
      return { ...state, orders: [...state.orders, action.payload] };
    case ORDER:
      return { ...state, orders: [] };
    case DELETE_ITEM:
      return { ...state, orders: [...state.orders.filter((el) => el.uniqueID !== action.payload)] };
    default:
      return state;
  }
};

export default customerReducer;
