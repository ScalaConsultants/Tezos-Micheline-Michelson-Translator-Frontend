import { put, call } from "redux-saga/effects";
import * as libraryActions from "./actions";
import LibraryService from "../../services/library.service";

export function* doLibraryFetch() {
  const libraryService = new LibraryService();
  const response = yield call(libraryService.get);

  if (response.status === 200) {
    yield put(libraryActions.LibrarySet(response.json));
  }
}
