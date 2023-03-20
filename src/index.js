import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import store from './toolkitexample/store/store';
  import App from './ShoppingCart/App';
import Store from './ShoppingCart/slice/Store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store} >
  <App/>
  </Provider>
);
  