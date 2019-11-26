import React from "react";
import { mount } from "enzyme/build";
import { StoreContext } from "redux-react-hook";
import AddTranslation from "./AddTranslation";
import FormButton from '../shared/formButton/FormButton';

import configureStore from "../../store/index";
import rootSaga from "../../store/saga";

const store = configureStore();
store.runSaga(rootSaga);

describe("AddTranslation", () => {
  const wrapper = mount(
    <StoreContext.Provider value={store}>
      <AddTranslation setShowModal={() => { }} />
    </StoreContext.Provider>,
  );

  it('matches snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const item = wrapper.find(AddTranslation);

    expect(
      item
        .at(0)
        .find({ name: "name" })
        .at(0).text()
    ).toEqual("Name");

    expect(
      item
        .at(0)
        .find(FormButton)
        .at(0)
        .text()
    ).toEqual("cancel");
  });
});
