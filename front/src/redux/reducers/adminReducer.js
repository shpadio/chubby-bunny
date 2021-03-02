import {
  ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, GET_STATISTICS, INIT_PRODUCTS, HIDE_PRODUCTS

} from '../types';

const windowState = JSON.parse(window.localStorage.getItem('state'));
let preloadState = {};
if (windowState && windowState.admin) {
  preloadState = {
    products: windowState.admin.products,
    statistics: windowState.admin.statistics
  };
} else {
  preloadState = { products: [], statistics: [] };
}

const adminReducer = (state = preloadState, action) => {
  switch (action.type) {
    case INIT_PRODUCTS:
      return { ...state, products: action.payload };
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };

    case DELETE_PRODUCT:
      return { ...state, products: [...state.products.filter((el) => el._id !== action.payload)] };

    case EDIT_PRODUCT:
      return {
        ...state,
        products: [...state.products.forEach((el) => {
          if (el._id === action.payload._id) {
            return action.payload;
          }
          return el;
        })]
      };

    case GET_STATISTICS:
      return { ...state, statistics: action.payload };

    case HIDE_PRODUCTS:
      return {
        ...state,
        products: [...state.products.map((el) => {
          if (el._id === action.payload) {
            el.visible = !el.visible;
          }
          return el;
        })]
      };


    default:
      return state;
  }
};

export default adminReducer;
