import {
  LIBRARY_SET,
  LIBRARY_FLUSH
} from '../actions/library'

export type LibraryItem = {
  source: string,
  translation: string
}

export type LibraryState = LibraryItem[]

export type LibraryAction = {
  type: string,
  payload: LibraryItem[]
}

const initState: LibraryState = [];

export const library = (state: LibraryState = initState, action: LibraryAction) => {
    switch (action.type) {
      case LIBRARY_SET:
        return action.payload;
      case LIBRARY_FLUSH:
        return initState;
      default:
        return state;
    }
};
