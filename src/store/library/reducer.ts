import * as LibraryTypes from "./types";

const libraryInitState: LibraryTypes.LibraryState = [];

export const libraryReducer = (
  state: LibraryTypes.LibraryState = libraryInitState,
  action: LibraryTypes.LibraryAction,
) => {
  switch (action.type) {
    case LibraryTypes.LIBRARY_SET:
      return action.payload;
    case LibraryTypes.LIBRARY_FLUSH:
      return libraryInitState;
    default:
      return state;
  }
};
