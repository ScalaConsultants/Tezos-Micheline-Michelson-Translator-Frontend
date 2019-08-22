import { put, call } from 'redux-saga/effects';
import * as translatorActions from '../actions/translator';

export function* doFetchMichelineToMichelsonTranslation(action: any) {
  const response = yield call(fetchMichelineToMichelsonTranslationRequest, action.payload);

  if (response.status === 200) {
    yield put(translatorActions.TranslatorSetMichelson(response.status, response.text));
  }
  else {
    yield put(translatorActions.TranslatorSetError(response.text));
  }
}

const fetchMichelineToMichelsonTranslationRequest = (payload: any) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: payload
  };

  return fetch(process.env.REACT_APP_API_URL + '/v1/translate/from/micheline/to/michelson', options)
    .then(async response => {
      return { status: response.status, text: await response.text() }
    })
    .catch(error => {
      throw(error)
    })
};

export function* doFetchMichelsonToMichelineTranslation(action: any) {
  const response = yield call(fetchMichelsonToMichelineTranslationRequest, action.payload);

  if (response.status === 200)
  {
    yield put(translatorActions.TranslatorSetMicheline(response.status, response.text));
  }
  else {
    yield put(translatorActions.TranslatorSetError(response.text));
  }
}

const fetchMichelsonToMichelineTranslationRequest = (payload: any) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: payload
  };

  return fetch(process.env.REACT_APP_API_URL + '/v1/translate/from/michelson/to/micheline', options)
    .then(async response => {
      return { status: response.status, text: await response.text() }
    })
    .catch(error => {
      throw(error)
    })
};



