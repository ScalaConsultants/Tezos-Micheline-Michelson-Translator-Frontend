import {takeEvery, fork} from 'redux-saga/effects';
import * as translatorActions from '../actions/translator';
import * as translatorSagas from './translator';

export function* startup(): any {
  // yield fork(checkAuthenticated);
}

export default function* root() {
  yield fork(startup);
  yield takeEvery(translatorActions.TRANSLATOR_FETCH_MICHELINE_TO_MICHELSON, translatorSagas.doFetchMichelineToMichelsonTranslation);
  yield takeEvery(translatorActions.TRANSLATOR_FETCH_MICHELSON_TO_MICHELINE, translatorSagas.doFetchMichelsonToMichelineTranslation);
}
