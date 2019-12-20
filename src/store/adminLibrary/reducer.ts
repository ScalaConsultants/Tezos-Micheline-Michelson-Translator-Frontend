import * as AdminLibraryTypes from "./types";

const adminLibraryInitState: AdminLibraryTypes.AdminLibraryState = [];

export const adminLibraryReducer = (
  state: AdminLibraryTypes.AdminLibraryState = adminLibraryInitState,
  action: AdminLibraryTypes.AdminLibraryAction,
) => {
  switch (action.type) {
    case AdminLibraryTypes.ADMIN_LIBRARY_SET:
      return action.payload;
    case AdminLibraryTypes.ADMIN_LIBRARY_FLUSH:
      return adminLibraryInitState;
    default:
      return state;
  }
};
