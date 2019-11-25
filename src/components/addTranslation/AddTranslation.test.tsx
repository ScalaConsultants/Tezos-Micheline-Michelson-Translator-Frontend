import React from "react";
import { mount } from "enzyme";
import { StoreContext } from "redux-react-hook";
import configureStore from "redux-mock-store";
import AddTranslation from "./AddTranslation";

const mockStore = configureStore();

const mockInitState = {
  translator: {
    micheline:
      "parameter int;\nstorage int;\ncode { CAR ;\n       PUSH int 1 ;\n       ADD ;\n       NIL operation ;\n       PAIR }",
    michelson:
      '[ { "prim": "parameter", "args": [ { "prim": "int" } ] }, { "prim": "storage", "args": [ { "prim": "int" } ] }, { "prim": "code", "args": [ [ { "prim": "CAR" },{ "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "1" } ] },{ "prim": "ADD" },{ "prim": "NIL", "args": [ { "prim": "operation" } ] },{ "prim": "PAIR" } ] ] } ]\n',
  },
};

const store = mockStore(mockInitState);

describe("AddTranslation", () => {
  const wrapper = mount(
    <StoreContext.Provider value={store}>
      <AddTranslation setShowModal={() => {}} />
    </StoreContext.Provider>,
  );

  it("matches snapshot", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
