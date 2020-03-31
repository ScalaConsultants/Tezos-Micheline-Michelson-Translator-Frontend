import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { StoreContext } from "redux-react-hook";
import configureStore from "redux-mock-store";
import Library from "./Contract";

import Contract from "./LibraryItem";

import * as TranslatorActions from "../../store/translator/actions";
import * as TranslatorTypes from "../../store/translator/types";

const library = [{"title":"Test1","author":"Author1","email":null,"description":"Description1","micheline":"[\n  {\n    \"prim\": \"parameter\",\n    \"args\": [\n      {\n        \"prim\": \"int\"\n      }\n    ]\n  },\n  {\n    \"prim\": \"storage\",\n    \"args\": [\n      {\n        \"prim\": \"int\"\n      }\n    ]\n  },\n  {\n    \"prim\": \"code\",\n    \"args\": [\n      [\n        {\n          \"prim\": \"CAR\"\n        },\n        {\n          \"prim\": \"PUSH\",\n          \"args\": [\n            {\n              \"prim\": \"int\"\n            },\n            {\n              \"int\": \"1\"\n            }\n          ]\n        },\n        {\n          \"prim\": \"ADD\"\n        },\n        {\n          \"prim\": \"NIL\",\n          \"args\": [\n            {\n              \"prim\": \"operation\"\n            }\n          ]\n        },\n        {\n          \"prim\": \"PAIR\"\n        }\n      ]\n    ]\n  }\n]","michelson":"parameter int;\nstorage int;\ncode { CAR ;\n       PUSH int 1 ;\n       ADD ;\n       NIL operation ;\n       PAIR }"},{"title":"dsddsdsds","author":"sddsdssdds","email":null,"description":"dsdsdsdsdsds","micheline":"[\n  {\n    \"prim\": \"parameter\",\n    \"args\": [\n      {\n        \"prim\": \"int\"\n      }\n    ]\n  },\n  {\n    \"prim\": \"storage\",\n    \"args\": [\n      {\n        \"prim\": \"int\"\n      }\n    ]\n  },\n  {\n    \"prim\": \"code\",\n    \"args\": [\n      [\n        {\n          \"prim\": \"CAR\"\n        },\n        {\n          \"prim\": \"PUSH\",\n          \"args\": [\n            {\n              \"prim\": \"int\"\n            },\n            {\n              \"int\": \"1\"\n            }\n          ]\n        },\n        {\n          \"prim\": \"ADD\"\n        },\n        {\n          \"prim\": \"NIL\",\n          \"args\": [\n            {\n              \"prim\": \"operation\"\n            }\n          ]\n        },\n        {\n          \"prim\": \"PAIR\"\n        }\n      ]\n    ]\n  }\n]","michelson":"parameter int;\nstorage int;\ncode { CAR ;\n       PUSH int 1 ;\n       ADD ;\n       NIL operation ;\n       PAIR }"},{"title":"test","author":"test1","email":null,"description":"sdkofmwofmnwof","micheline":"[\n  {\n    \"prim\": \"parameter\",\n    \"args\": [\n      {\n        \"prim\": \"int\"\n      }\n    ]\n  },\n  {\n    \"prim\": \"storage\",\n    \"args\": [\n      {\n        \"prim\": \"int\"\n      }\n    ]\n  },\n  {\n    \"prim\": \"code\",\n    \"args\": [\n      [\n        {\n          \"prim\": \"CAR\"\n        },\n        {\n          \"prim\": \"PUSH\",\n          \"args\": [\n            {\n              \"prim\": \"int\"\n            },\n            {\n              \"int\": \"1\"\n            }\n          ]\n        },\n        {\n          \"prim\": \"ADD\"\n        },\n        {\n          \"prim\": \"NIL\",\n          \"args\": [\n            {\n              \"prim\": \"operation\"\n            }\n          ]\n        },\n        {\n          \"prim\": \"PAIR\"\n        }\n      ]\n    ]\n  }\n]","michelson":"parameter int;\nstorage int;\ncode { CAR ;\n       PUSH int 1 ;\n       ADD ;\n       NIL operation ;\n       PAIR }"},{"title":"dqedfeq","author":"qwdqwd","email":null,"description":"qwdq","micheline":"[\n  {\n    \"prim\": \"parameter\",\n    \"args\": [\n      {\n        \"prim\": \"int\"\n      }\n    ]\n  },\n  {\n    \"prim\": \"storage\",\n    \"args\": [\n      {\n        \"prim\": \"int\"\n      }\n    ]\n  },\n  {\n    \"prim\": \"code\",\n    \"args\": [\n      [\n        {\n          \"prim\": \"CAR\"\n        },\n        {\n          \"prim\": \"PUSH\",\n          \"args\": [\n            {\n              \"prim\": \"int\"\n            },\n            {\n              \"int\": \"1\"\n            }\n          ]\n        },\n        {\n          \"prim\": \"ADD\"\n        },\n        {\n          \"prim\": \"NIL\",\n          \"args\": [\n            {\n              \"prim\": \"operation\"\n            }\n          ]\n        },\n        {\n          \"prim\": \"PAIR\"\n        }\n      ]\n    ]\n  }\n]","michelson":"parameter int;\nstorage int;\ncode { CAR ;\n       PUSH int 1 ;\n       ADD ;\n       NIL operation ;\n       PAIR }"}];
const mockStore = configureStore();

describe("Library", () => {
  let wrapper: ReactWrapper;
  let store: any;

  beforeEach(() => {
    store = mockStore({ library });

    store.dispatch = jest.fn();

    wrapper = mount(
      <StoreContext.Provider value={store}>
        <Library />
      </StoreContext.Provider>,
    );
  });

  it("renders without crashing", () => {
    const item = wrapper.find(Contract);

    expect(
      item
        .at(0)
        .find(".LibraryItem__detail-wrapper--label")
        .at(0)
        .text(),
    ).toEqual("Title");

    expect(
      item
        .at(0)
        .find(".LibraryItem__detail-wrapper--content")
        .at(0)
        .text(),
    ).toEqual("Test1");

    expect(item.at(0).props().data).toEqual(library[0]);
    expect(item).toHaveLength(4);
  });

  it("selecting Micheline source is working", () => {
    const item = wrapper.find(Contract);

    const itemMicheline = item
      .at(0)
      .find(".LibraryItem__wrapper2")
      .at(0);

    itemMicheline.simulate("click");
    expect(store.dispatch).toHaveBeenCalledTimes(3);
    expect(store.dispatch).toHaveBeenCalledWith(
      TranslatorActions.TranslatorSetMode(TranslatorTypes.Modes.MICHELINEMICHELSON),
    );
    expect(store.dispatch).toHaveBeenCalledWith({
      type: TranslatorTypes.TRANSLATOR_SET_MICHELINE,
      translation: library[0].micheline,
    });
    expect(store.dispatch).toHaveBeenCalledWith(
      TranslatorActions.TranslatorFetchMichelineToMichelson(library[0].micheline),
    );
  });

  it("selecting Michelson source is working", () => {
    const item = wrapper.find(Contract);

    const itemMichelson = item
      .at(0)
      .find(".LibraryItem__wrapper2")
      .at(1);

    itemMichelson.simulate("click");
    expect(store.dispatch).toHaveBeenCalledTimes(3);
    expect(store.dispatch).toHaveBeenCalledWith(
      TranslatorActions.TranslatorSetMode(TranslatorTypes.Modes.MICHELSONMICHELINE),
    );
    expect(store.dispatch).toHaveBeenCalledWith({
      type: TranslatorTypes.TRANSLATOR_SET_MICHELSON,
      translation: library[0].michelson,
    });
    expect(store.dispatch).toHaveBeenCalledWith(
      TranslatorActions.TranslatorFetchMichelsonToMicheline(library[0].michelson),
    );
  });

  it("matches snapshot", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
