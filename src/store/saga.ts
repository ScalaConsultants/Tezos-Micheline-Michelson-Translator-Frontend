import { takeEvery, fork, put } from "redux-saga/effects";
import * as translatorTypes from "./translator/types";
import * as libraryActions from "./library/actions";
import * as libraryTypes from "./library/types";
import * as authActions from "./authentication/actions";
import * as translatorSagas from "./translator/sagas";
import * as librarySagas from "./library/sagas";
import { getLoginToken } from '../components/login/sessionHandler';

export function* startup(): any {
  yield fork(getData);
  yield fork(checkAuth);
}

export function* getData() {
  yield put(libraryActions.LibraryFetch());
}

export function* checkAuth() {
  const token = getLoginToken();
  //We make a call to backend and confirm if the token is correct. Then we set auth.
  const auth = false;
  yield put(authActions.AuthenticationSetAuth(auth));
}

export default function* root() {
  yield fork(startup);
  yield takeEvery(
    translatorTypes.TRANSLATOR_FETCH_MICHELINE_TO_MICHELSON,
    translatorSagas.doFetchMichelineToMichelsonTranslation,
  );
  yield takeEvery(
    translatorTypes.TRANSLATOR_FETCH_MICHELSON_TO_MICHELINE,
    translatorSagas.doFetchMichelsonToMichelineTranslation,
  );
  yield takeEvery(libraryTypes.LIBRARY_FETCH, librarySagas.doLibraryFetch);
}
