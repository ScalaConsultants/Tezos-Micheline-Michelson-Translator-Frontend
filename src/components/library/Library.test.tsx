import React from "react";
import { mount } from "enzyme/build";
import { StoreContext } from "redux-react-hook";
import Library from "./Library";

import configureStore from "../../store/index";
import rootSaga from "../../store/saga";
import * as LibraryTypes from "../../store/library/types";
import LibraryItem from "./LibraryItem";

const store = configureStore();
store.runSaga(rootSaga);

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

it("App -> renders without crashing", () => {
  store.dispatch({
    type: LibraryTypes.LIBRARY_SET,
    payload: library,
  });

  const wrapper = mount(
    <StoreContext.Provider value={store}>
      <Library />
    </StoreContext.Provider>,
  );

  const item = wrapper.find(LibraryItem);
  // expect(item.at(0).find(".LibraryItem__detail-wrapper--label").at(0));
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
