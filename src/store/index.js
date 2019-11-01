import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { translator } from './reducers/translator';
import { library } from './reducers/library';

const rootReducer = combineReducers({
  translator,
  library,
});

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  return {
    ...createStore(rootReducer, composeWithDevTools(middleWareEnhancer)),
    runSaga: sagaMiddleware.run,
  };
}
