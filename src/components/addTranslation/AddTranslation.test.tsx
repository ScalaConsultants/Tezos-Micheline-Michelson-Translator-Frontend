import React from "react";
import { mount } from "enzyme/build";
import { StoreContext } from "redux-react-hook";
import AddTranslation from "./AddTranslation";

import configureStore from "../../store/index";
import rootSaga from "../../store/saga";

const store = configureStore();
store.runSaga(rootSaga);

describe("AddTranslation", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <StoreContext.Provider value={store}>
        <AddTranslation setShowModal={() => { }} />
      </StoreContext.Provider>,
    );
  });

  it('matches snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  })
});
