import {
  GET_STATISTICS, INIT_PRODUCTS
} from '../types';

export const initProductsAC = (products) => ({ type: INIT_PRODUCTS, payload: products });

export const getStatisticsAC = (data) => ({ type: GET_STATISTICS, payload: data });

