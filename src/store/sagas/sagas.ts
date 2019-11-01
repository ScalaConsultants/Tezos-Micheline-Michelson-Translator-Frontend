import {takeEvery, fork, put} from 'redux-saga/effects';
import * as translatorActions from '../actions/translator';
import * as libraryActions from '../actions/library';
import * as translatorSagas from './translator';
import * as librarySagas from './library';

export function* startup(): any {
  yield fork(getData);
}

export function* getData() {
  yield put(libraryActions.LibraryFetch());
}

export default function* root() {
  yield fork(startup);
  yield takeEvery(translatorActions.TRANSLATOR_FETCH_MICHELINE_TO_MICHELSON, translatorSagas.doFetchMichelineToMichelsonTranslation);
  yield takeEvery(translatorActions.TRANSLATOR_FETCH_MICHELSON_TO_MICHELINE, translatorSagas.doFetchMichelsonToMichelineTranslation);
  yield takeEvery(libraryActions.LIBRARY_FETCH, librarySagas.doLibraryFetch);
}
