import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import store from './toolkitexample/store/store';
import store from './thapatoolkit/store/Store';
import Store11 from './ShoppingCart/slice/Store';
import Page from './ShoppingCart/Page';
import App from './ShoppingCart/App';
import NewApp from './ShoppingCart copy/NewApp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} Store11={Store11}>
  <App/>
  {/* <NewApp/> */}
  </Provider>
);
