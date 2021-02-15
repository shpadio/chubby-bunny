import { ORDER_PRODUCT } from '../types';

const customerReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_PRODUCT:
      return { ...state, orders: [...state.orders, action.payload] };
    default:
      return state;
  }
};

export default customerReducer;
