import { ORDER_PRODUCT, INIT_PROFILE } from '../types';

const customerReducer = (state = { orders: [] }, action) => {
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
