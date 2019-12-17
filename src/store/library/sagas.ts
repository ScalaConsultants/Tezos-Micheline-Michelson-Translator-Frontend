import { put, call } from "redux-saga/effects";
import * as libraryActions from "./actions";

const libraryFetchRequest = () => {
  const options = {
    method: "GET",
  };

  return fetch(`${process.env.REACT_APP_API_URL}/v1/library`, options)
    .then(async response => {
      return { status: response.status, json: await response.json() };
    })
    .catch(error => {
      throw error;
    });
};

export function* doLibraryFetch() {
  const response = yield call(libraryFetchRequest);

  if (response.status === 200) {
    yield put(libraryActions.LibrarySet(response.json));
  }
}
