import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { StoreContext } from 'redux-react-hook';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import rootSaga from './store/saga';

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
