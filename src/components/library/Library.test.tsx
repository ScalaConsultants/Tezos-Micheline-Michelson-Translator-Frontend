import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { StoreContext } from "redux-react-hook";
import configureStore from "redux-mock-store";
import Library from "./Library";

import LibraryItem from "./LibraryItem";

import * as TranslatorActions from "../../store/translator/actions";
import * as TranslatorTypes from "../../store/translator/types";

const library = [
  {
    source:
      "parameter int;\nstorage int;\ncode { CAR ;\n       PUSH int 1 ;\n       ADD ;\n       NIL operation ;\n       PAIR }",
    translation:
      '[ { "prim": "parameter", "args": [ { "prim": "int" } ] }, { "prim": "storage", "args": [ { "prim": "int" } ] }, { "prim": "code", "args": [ [ { "prim": "CAR" },{ "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "1" } ] },{ "prim": "ADD" },{ "prim": "NIL", "args": [ { "prim": "operation" } ] },{ "prim": "PAIR" } ] ] } ]\n',
  },
  {
    source:
      "parameter int;\nstorage int;\ncode { CAR ;\n       PUSH int 1 ;\n       ADD ;\n       NIL operation ;\n       PAIR }",
    translation:
      '[ { "prim": "parameter", "args": [ { "prim": "int" } ] }, { "prim": "storage", "args": [ { "prim": "int" } ] }, { "prim": "code", "args": [ [ { "prim": "CAR" },{ "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "1" } ] },{ "prim": "ADD" },{ "prim": "NIL", "args": [ { "prim": "operation" } ] },{ "prim": "PAIR" } ] ] } ]\n',
  },
  {
    source:
      '[\n    {\n      "prim": "parameter",\n      "args": [\n        {\n          "prim": "int"\n        }\n      ]\n    },\n    {\n      "prim": "storage",\n      "args": [\n        {\n          "prim": "int"\n        }\n      ]\n    },\n    {\n      "prim": "code",\n      "args": [\n        [\n          {\n            "prim": "CAR"\n          },\n          {\n            "prim": "PUSH",\n            "args": [\n              {\n                "prim": "int"\n              },\n              {\n                "int": "1"\n              }\n            ]\n          },\n          {\n            "prim": "ADD"\n          },\n          {\n            "prim": "NIL",\n            "args": [\n              {\n                "prim": "operation"\n              }\n            ]\n          },\n          {\n            "prim": "PAIR"\n          }\n        ]\n      ]\n    }\n]',
    translation:
      "parameter int;\nstorage int;\ncode { CAR ;\n       PUSH int 1 ;\n       ADD ;\n       NIL operation ;\n       PAIR }",
  },
  { source: "EQ", translation: '{ "prim": "EQ" }\n' },
  {
    source:
      '[\n    {\n      "prim": "parameter",\n      "args": [\n        {\n          "prim": "int"\n        }\n      ]\n    },\n    {\n      "prim": "storage",\n      "args": [\n        {\n          "prim": "int"\n        }\n      ]\n    },\n    {\n      "prim": "code",\n      "args": [\n        [\n          {\n            "prim": "CAR"\n          },\n          {\n            "prim": "PUSH",\n            "args": [\n              {\n                "prim": "int"\n              },\n              {\n                "int": "1"\n              }\n            ]\n          },\n          {\n            "prim": "ADD"\n          },\n          {\n            "prim": "NIL",\n            "args": [\n              {\n                "prim": "operation"\n              }\n            ]\n          },\n          {\n            "prim": "PAIR"\n          }\n        ]\n      ]\n    }\n]',
    translation:
      "parameter int;\nstorage int;\ncode { CAR ;\n       PUSH int 1 ;\n       ADD ;\n       NIL operation ;\n       PAIR }",
  },
  {
    source:
      '[\n    {\n      "prim": "parameter",\n      "args": [\n        {\n          "prim": "int"\n        }\n      ]\n    },\n    {\n      "prim": "storage",\n      "args": [\n        {\n          "prim": "int"\n        }\n      ]\n    },\n    {\n      "prim": "code",\n      "args": [\n        [\n          {\n            "prim": "CAR"\n          },\n          {\n            "prim": "PUSH",\n            "args": [\n              {\n                "prim": "int"\n              },\n              {\n                "int": "1"\n              }\n            ]\n          },\n          {\n            "prim": "ADD"\n          },\n          {\n            "prim": "NIL",\n            "args": [\n              {\n                "prim": "operation"\n              }\n            ]\n          },\n          {\n            "prim": "PAIR"\n          }\n        ]\n      ]\n    }\n]',
    translation:
      "parameter int;\nstorage int;\ncode { CAR ;\n       PUSH int 1 ;\n       ADD ;\n       NIL operation ;\n       PAIR }",
  },
  {
    source:
      '[\n  {\n    "prim": "parameter",\n    "args": [\n      {\n        "prim": "int"\n      }\n    ]\n  },\n  {\n    "prim": "storage",\n    "args": [\n      {\n        "prim": "int"\n      }\n    ]\n  },\n  {\n    "prim": "code",\n    "args": [\n      [\n        {\n          "prim": "CAR"\n        },\n        {\n          "prim": "PUSH",\n          "args": [\n            {\n              "prim": "int"\n            },\n            {\n              "int": "1"\n            }\n          ]\n        },\n        {\n          "prim": "ADD"\n        },\n        {\n          "prim": "NIL",\n          "args": [\n            {\n              "prim": "operation"\n            }\n          ]\n        },\n        {\n          "prim": "PAIR"\n        }\n      ]\n    ]\n  }\n]',
    translation:
      "parameter int;\nstorage int;\ncode { CAR ;\n       PUSH int 1 ;\n       ADD ;\n       NIL operation ;\n       PAIR }",
  },
];

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
    const item = wrapper.find(LibraryItem);

    expect(
      item
        .at(0)
        .find(".LibraryItem__detail-wrapper--label")
        .at(0)
        .text(),
    ).toEqual("Name");

    expect(
      item
        .at(0)
        .find(".LibraryItem__detail-wrapper--content")
        .at(0)
        .text(),
    ).toEqual("some name");

    expect(item.at(0).props().data).toEqual(library[1]);
    expect(item).toHaveLength(7);
  });

  it("selecting Micheline source is working", () => {
    const item = wrapper.find(LibraryItem);

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
      translation: library[0].source,
    });
    expect(store.dispatch).toHaveBeenCalledWith(
      TranslatorActions.TranslatorFetchMichelineToMichelson(library[0].source),
    );
  });

  it("selecting Michelson source is working", () => {
    const item = wrapper.find(LibraryItem);

    const itemMicheline = item
      .at(0)
      .find(".LibraryItem__wrapper2")
      .at(1);

    itemMicheline.simulate("click");
    expect(store.dispatch).toHaveBeenCalledTimes(3);
    expect(store.dispatch).toHaveBeenCalledWith(
      TranslatorActions.TranslatorSetMode(TranslatorTypes.Modes.MICHELSONMICHELINE),
    );
    expect(store.dispatch).toHaveBeenCalledWith({
      type: TranslatorTypes.TRANSLATOR_SET_MICHELSON,
      translation: library[0].translation,
    });
    expect(store.dispatch).toHaveBeenCalledWith(
      TranslatorActions.TranslatorFetchMichelsonToMicheline(library[0].translation),
    );
  });

  it("matches snapshot", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
