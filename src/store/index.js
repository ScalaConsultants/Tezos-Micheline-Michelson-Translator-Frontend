import {createStore, combineReducers, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from "redux-devtools-extension";

import {translator} from './reducers/translator';

const rootReducer = combineReducers({
  translator: translator
});

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  return {
    ...createStore(rootReducer,  composeWithDevTools(middleWareEnhancer)),
    runSaga: sagaMiddleware.run
  }
}
