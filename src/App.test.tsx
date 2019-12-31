import React from "react";
import { mount } from "enzyme/build";
import { StoreContext } from "redux-react-hook";
import App from "./App";

import configureStore from "./store/index";
import rootSaga from "./store/saga";

const store = configureStore();
store.runSaga(rootSaga);

it("App -> renders without crashing", () => {
  const wrapper = mount(
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>,
  );
});
