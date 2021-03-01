import {
  ADD_PRODUCT,
  GET_STATISTICS, INIT_PRODUCTS
} from '../types';

export const initProductsAC = (products) => ({ type: INIT_PRODUCTS, payload: products });
export const addProductsAC = (data) => ({ type: ADD_PRODUCT, payload: data });
export const getStatisticsAC = (data) => ({ type: GET_STATISTICS, payload: data });

