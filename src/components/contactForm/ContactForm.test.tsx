import React from "react";
import { mount, shallow } from "enzyme";
import { StoreContext } from "redux-react-hook";
import ContactForm from "./ContactForm";
import FormButton from "../shared/formButton/FormButton";

import configureStore from "../../store/index";
import rootSaga from "../../store/saga";

const store = configureStore();
store.runSaga(rootSaga);

describe("ContactForm", () => {
  const wrapper = mount(
    <StoreContext.Provider value={store}>
      <ContactForm />
    </StoreContext.Provider>,
  );

  it("matches snapshot", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const item = wrapper.find(ContactForm);

    expect(
      item
        .at(0)
        .find({ name: "name" })
        .at(0)
        .text(),
    ).toEqual("Name");

    expect(
      item
        .at(0)
        .find(FormButton)
        .at(0)
        .text(),
    ).toEqual("Submit");
  });
});
