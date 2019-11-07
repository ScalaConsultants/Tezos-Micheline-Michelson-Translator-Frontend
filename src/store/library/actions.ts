import * as libraryTypes from "./types";

export const LibraryFetch = (): libraryTypes.LibraryActionTypes => ({
  type: libraryTypes.LIBRARY_FETCH,
});

export const LibrarySet = (payload: libraryTypes.LibraryItem[]): libraryTypes.LibraryActionTypes => ({
  type: libraryTypes.LIBRARY_SET,
  payload,
});

export const LibraryFlush = (): libraryTypes.LibraryActionTypes => ({
  type: libraryTypes.LIBRARY_FLUSH,
});
