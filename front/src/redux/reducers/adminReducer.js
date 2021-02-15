import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from '../types';

const adminReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };

    case DELETE_PRODUCT:
      return { ...state, products: [...state.products.filter((el) => el._id !== action.payload)] };

    case EDIT_PRODUCT:
      return {
        ...state,
        products: [...state.products.map((el) => {
          if (el._id === action.payload._id) {
            return action.payload;
          }
          return el;
        })]
      };
    default:
      return state;
  }
};

export default adminReducer;
