import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { StoreContext } from "redux-react-hook";
import configureStore from "redux-mock-store";
import AddTranslation from "./AddTranslation";
import FormButton from "../shared/formButton/FormButton";

const translator = {
  micheline:
    "parameter int;\nstorage int;\ncode { CAR ;\n       PUSH int 1 ;\n       ADD ;\n       NIL operation ;\n       PAIR }",
  michelson:
    '[ { "prim": "parameter", "args": [ { "prim": "int" } ] }, { "prim": "storage", "args": [ { "prim": "int" } ] }, { "prim": "code", "args": [ [ { "prim": "CAR" },{ "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "1" } ] },{ "prim": "ADD" },{ "prim": "NIL", "args": [ { "prim": "operation" } ] },{ "prim": "PAIR" } ] ] } ]\n',
};

const mockStore = configureStore();

describe("AddTranslation", () => {
  let wrapper: ReactWrapper;
  let store: any;

  beforeEach(() => {
    store = mockStore({ translator });

    store.dispatch = jest.fn();

    wrapper = mount(
      <StoreContext.Provider value={store}>
        <AddTranslation setShowModal={() => {}} />
      </StoreContext.Provider>,
    );
  });

  it("matches snapshot", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const item = wrapper.find(AddTranslation);

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
    ).toEqual("cancel");
  });
});
