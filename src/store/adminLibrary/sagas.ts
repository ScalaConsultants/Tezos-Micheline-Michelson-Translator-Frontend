import { put, call } from "redux-saga/effects";
import * as adminLibraryActions from "./actions";
import * as adminLibraryTypes from "./types";
import AdminLibraryService from "../../services/adminLibrary.service";

export function* doAdminLibraryFetch() {
  const adminLibraryService = new AdminLibraryService();
  const response = yield call(adminLibraryService.get);

  if (response.status === 200) {
    yield put(adminLibraryActions.LibrarySet(response.json));
  }
}

export function* doAdminLibrarySetStatus(action: adminLibraryTypes.IAdminLibrarySetStatus) {
  const adminLibraryService = new AdminLibraryService();
  const response = yield call(adminLibraryService.setStatus, action.item, action.status);

  if (response.status === 200) {
    yield put(adminLibraryActions.LibraryFetch());
  }
}

export function* doAdminLibraryDelete(action: adminLibraryTypes.IAdminLibraryDelete) {
  const adminLibraryService = new AdminLibraryService();
  const response = yield call(adminLibraryService.removeItem, action.item);

  if (response.status === 200) {
    yield put(adminLibraryActions.LibraryFetch());
  }
}
