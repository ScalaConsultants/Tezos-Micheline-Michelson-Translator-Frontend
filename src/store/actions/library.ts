export const LIBRARY_FETCH = 'LIBRARY_FETCH';
export const LIBRARY_SET = 'LIBRARY_SET';
export const LIBRARY_FLUSH = 'LIBRARY_FLUSH';

export const LibraryFetch = () => ({
  type: LIBRARY_FETCH
});

export const LibrarySet = (payload: any) => ({
  type: LIBRARY_SET,
  payload: payload
});

export const LibraryFlush = () => ({
  type: LIBRARY_FLUSH
});
