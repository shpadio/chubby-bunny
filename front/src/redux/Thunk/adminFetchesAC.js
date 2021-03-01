import axios from 'axios';
import { getStatisticsAC, initProductsAC } from '../AC/adminAC';
import { ADD_PRODUCT } from '../types';

export const initProductsFetchAC = () => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/`)
    .then((response) => response.json())
    .then((data) => dispatch(initProductsAC(data)));
};

export const addProductFetchAC = (formData) => (dispatch) => {
  axios.post(`${process.env.REACT_APP_URL}/admin/`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(() => {
      dispatch({
        type: ADD_PRODUCT,
        payload: { formData }
      });
    });
};


export const getStatisticsFetchAC = () => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/admin`)
    .then((response) => response.json())
    .then((data) => dispatch(getStatisticsAC(data)));
};

