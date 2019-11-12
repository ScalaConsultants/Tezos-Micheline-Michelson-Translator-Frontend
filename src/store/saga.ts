import { takeEvery, fork, put } from "redux-saga/effects";
import * as translatorTypes from "./translator/types";
import * as libraryActions from "./library/actions";
import * as libraryTypes from "./library/types";
import * as translatorSagas from "./translator/sagas";
import * as librarySagas from "./library/sagas";
import * as messageTypes from "./message/types";
import * as messageSagas from "./message/sagas";

export function* startup(): any {
  yield fork(getData);
}

export function* getData() {
  yield put(libraryActions.LibraryFetch());
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
  // yield takeEvery(messageTypes.MESSAGE_SET, messageSagas.doMessageSet);
  yield takeEvery(messageTypes.MESSAGE_SEND, messageSagas.doMessageSend);
}
