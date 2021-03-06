export type LibraryItem = {
  uid: string;
  title: string;
  author: string;
  email: string;
  description: string;
  micheline: string;
  michelson: string;
};

export const LIBRARY_FETCH = "LIBRARY_FETCH";
export const LIBRARY_SET = "LIBRARY_SET";
export const LIBRARY_FLUSH = "LIBRARY_FLUSH";

export type LibraryState = LibraryItem[];

export type LibraryAction = {
  type: string;
  payload: LibraryItem[];
};

export interface ILibraryFetch {
  type: typeof LIBRARY_FETCH;
}

export interface ILibrarySet {
  type: typeof LIBRARY_SET;
  payload: LibraryItem[];
}

export interface ILibraryFlush {
  type: typeof LIBRARY_FLUSH;
}

export type LibraryActionTypes = ILibraryFetch | ILibrarySet | ILibraryFlush;
