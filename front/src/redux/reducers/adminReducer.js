import {
  ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, GET_STATISTICS

} from '../types';

const adminReducer = (state = { products: [], statistics: '' }, action) => {
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

    case GET_STATISTICS:
      return { ...state, statistics: action.payload };
    default:
      return state;
  }
};

export default adminReducer;
