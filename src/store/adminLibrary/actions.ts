import * as adminLibraryTypes from "./types";

export const LibraryFetch = (): adminLibraryTypes.AdminLibraryActionTypes => ({
  type: adminLibraryTypes.ADMIN_LIBRARY_FETCH,
});

export const LibrarySet = (
  payload: adminLibraryTypes.AdminLibraryItem[],
): adminLibraryTypes.AdminLibraryActionTypes => ({
  type: adminLibraryTypes.ADMIN_LIBRARY_SET,
  payload,
});

export const LibrarySetStatus = (
  item: string,
  status: adminLibraryTypes.adminLibraryItemStatusType,
): adminLibraryTypes.AdminLibraryActionTypes => ({
  type: adminLibraryTypes.ADMIN_LIBRARY_SET_STATUS,
  item,
  status,
});

export const LibraryFlush = (): adminLibraryTypes.AdminLibraryActionTypes => ({
  type: adminLibraryTypes.ADMIN_LIBRARY_FLUSH,
});

export const LibraryDelete = (item: string): adminLibraryTypes.AdminLibraryActionTypes => ({
  type: adminLibraryTypes.ADMIN_LIBRARY_DELETE,
  item
});
