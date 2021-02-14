import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App/App";
import store from './redux/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>

      <App />

  </>,
  document.getElementById('root')
);

serviceWorker.unregister();
