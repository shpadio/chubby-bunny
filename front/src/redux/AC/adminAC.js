

import {
  GET_STATISTICS, INIT_PRODUCTS
} from '../types';

export const initProductsAC = (products) => ({ type: INIT_PRODUCTS, payload: products });

export const getStatisticsAC = (data) => ({ type: GET_STATISTICS, payload: data });

export const initProductsFetchAC = () => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/`)
    .then((response) => response.json())
    .then((data) => dispatch(initProductsAC(data)));
};

// export const addProductFetchAC = (title, description, price, formData) => (dispatch) => {
// };

export const getStatisticsFetchAC = () => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/admin`)
    .then((response) => response.json())
    .then((data) => dispatch(getStatisticsAC(data)));
};
