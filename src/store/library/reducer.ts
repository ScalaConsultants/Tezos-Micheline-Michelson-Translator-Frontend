import * as libraryTypes from './types';
import { LibraryAction, LibraryState } from './types';

const libraryInitState: LibraryState = [];

export const libraryReducer = (state: LibraryState = libraryInitState, action: LibraryAction) => {
  switch (action.type) {
    case libraryTypes.LIBRARY_SET:
      return action.payload;
    case libraryTypes.LIBRARY_FLUSH:
      return libraryInitState;
    default:
      return state;
  }
};
