export type AdminLibraryItem = {
  uid: string;
  name: string;
  author: string;
  email: string;
  description: string;
  micheline: string;
  michelson: string;
  status: adminLibraryItemStatusType;
};

export const ADMIN_LIBRARY_FETCH = "ADMIN_LIBRARY_FETCH";
export const ADMIN_LIBRARY_SET = "ADMIN_LIBRARY_SET";
export const ADMIN_LIBRARY_SET_STATUS = "ADMIN_LIBRARY_SET_STATUS";
export const ADMIN_LIBRARY_DELETE = "ADMIN_LIBRARY_DELETE";
export const ADMIN_LIBRARY_FLUSH = "ADMIN_LIBRARY_FLUSH";

export type AdminLibraryState = AdminLibraryItem[];

export type AdminLibraryAction = {
  type: string;
  payload: AdminLibraryItem[];
};

export interface IAdminLibraryFetch {
  type: typeof ADMIN_LIBRARY_FETCH;
}

export interface IAdminLibrarySet {
  type: typeof ADMIN_LIBRARY_SET;
  payload: AdminLibraryItem[];
}

export interface IAdminLibrarySetStatus {
  type: typeof ADMIN_LIBRARY_SET_STATUS;
  item: string;
  status: adminLibraryItemStatusType;
}

export interface IAdminLibraryDelete {
  type: typeof ADMIN_LIBRARY_DELETE;
  item: string;
}

export interface IAdminLibraryFlush {
  type: typeof ADMIN_LIBRARY_FLUSH;
}

export enum adminLibraryItemStatusType {
  ACCEPTED = "accepted",
  DECLINED = "declined",
}

export type AdminLibraryActionTypes =
  | IAdminLibraryFetch
  | IAdminLibrarySet
  | IAdminLibrarySetStatus
  | IAdminLibraryFlush;
