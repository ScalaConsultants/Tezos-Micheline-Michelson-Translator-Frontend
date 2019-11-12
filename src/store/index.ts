import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { translatorReducer } from "./translator/reducer";
import { libraryReducer } from "./library/reducer";
import { authenticationReducer } from './authentication/reducer';

const rootReducer = combineReducers({
  translator: translatorReducer,
  library: libraryReducer,
  auth: authenticationReducer,
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
