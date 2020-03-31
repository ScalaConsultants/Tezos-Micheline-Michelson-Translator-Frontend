import React from "react";
import { mount } from "enzyme/build";
import { StoreContext } from "redux-react-hook";
import Login from "./Login";
import Formbutton from "../shared/formButton/FormButton";

import configureStore from "../../store";
import rootSaga from "../../store/saga";
import FormButton from "../shared/formButton/FormButton";

const store = configureStore();
store.runSaga(rootSaga);

describe("Login", () => {
  const wrapper = mount(
    <StoreContext.Provider value={store}>
      <Login />
    </StoreContext.Provider>,
  );

  it("matches snapshot", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const item = wrapper.find(Login);

    expect(
      item
        .at(0)
        .find({ name: "username" })
        .at(0)
        .text(),
    ).toEqual("Login");

    expect(
      item
        .at(0)
        .find(FormButton)
        .at(0)
        .text(),
    ).toEqual("Log in");
  });
});
