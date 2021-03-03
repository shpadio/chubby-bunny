import axios from 'axios';
import {
  addProductsAC, getStatisticsAC, initProductsAC, hideProductsAC
} from '../AC/adminAC';


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
  }).then(() => {
    dispatch(addProductsAC(formData));
  });
};


export const getStatisticsFetchAC = () => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/admin`)
    .then((response) => response.json())
    .then((data) => dispatch(getStatisticsAC(data)));
};

export const hideProductsFetchAC = (id) => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/admin`, {
    method: 'put',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ id })

  }).then((response) => (response.json()))
    .then((data) => dispatch(hideProductsAC(data._id)));
};
