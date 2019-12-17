import { takeEvery, fork, put } from "redux-saga/effects";

import * as authActions from "./authentication/actions";
import * as authTypes from "./authentication/types";
import * as authSagas from "./authentication/sagas";

import * as translatorTypes from "./translator/types";
import * as translatorSagas from "./translator/sagas";

import * as libraryActions from "./library/actions";
import * as libraryTypes from "./library/types";
import * as librarySagas from "./library/sagas";

import * as messageTypes from "./message/types";
import * as messageSagas from "./message/sagas";

import { getLoginToken } from "../components/login/sessionHandler";

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
  token && (yield put(authActions.AuthenticationSuccess(token)));
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
  yield takeEvery(translatorTypes.TRANSLATOR_SEND_TRANSLATION, translatorSagas.doSendTranslation);
  yield takeEvery(libraryTypes.LIBRARY_FETCH, librarySagas.doLibraryFetch);
  // yield takeEvery(messageTypes.MESSAGE_SET, messageSagas.doMessageSet);
  yield takeEvery(messageTypes.MESSAGE_SEND, messageSagas.doMessageSend);

  yield takeEvery(authTypes.AUTHENTICATION_LOGIN, authSagas.doLogin);
}
