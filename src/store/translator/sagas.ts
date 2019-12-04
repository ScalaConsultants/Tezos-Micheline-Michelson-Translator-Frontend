import { put, call } from "redux-saga/effects";
import * as translatorActions from "./actions";
import * as translatorTypes from "./types";

const fetchMichelsonToMichelineTranslationRequest = (payload: string) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
    },
    body: payload,
  };

  return fetch(`${process.env.REACT_APP_API_URL}/v1/translate/from/michelson/to/micheline`, options)
  .then(async response => {
    console.log('fetch   MichelsonToMichelineTranslationRequest: ', payload, response);
    return { status: response.status, text: await response.text() };
  })
  .catch(error => {
    console.log('-----fetch MichelsonToMichelineTranslationRequest: 2', payload);
      throw error;
    });
};

export function* doFetchMichelsonToMichelineTranslation(action: translatorTypes.ITranslatorFetchMichelsonToMicheline) {
  const response = yield call(fetchMichelsonToMichelineTranslationRequest, action.payload);

  if (response.status === 200) {
    console.log('doFetch MichelsonToMichelineTranslation: ', action);
    yield put(
      translatorActions.TranslatorSetMicheline(
        response.status,
        JSON.stringify(JSON.parse(response.text), undefined, 2),
        ),
        );
      } else {
        console.log('doFetch MichelsonToMichelineTranslation: 2', action);
    yield put(translatorActions.TranslatorSetError(response.text));
  }
}

const fetchMichelineToMichelsonTranslationRequest = (payload: string) => {
  console.log('fetch  MichelineToMichelsonTranslationRequest', payload);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
    },
    body: payload,
  };

  return fetch(`${process.env.REACT_APP_API_URL}/v1/translate/from/micheline/to/michelson`, options)
  .then(async response => {
    console.log('fetch  MichelineToMichelsonTranslationRequest 2 OPTION', options);
    return { status: response.status, text: await response.text() };
  })
  .catch(error => {
    throw error;
  });
};

export function* doFetchMichelineToMichelsonTranslation(action: translatorTypes.ITranslatorFetchMichelineToMichelson) {
  const response = yield call(fetchMichelineToMichelsonTranslationRequest, action.payload);
  console.log('doFetch   MichelineToMichelsonTranslation', action);

  if (response.status === 200) {
    console.log('doFetch   MichelineToMichelsonTranslation 2', action);
    yield put(translatorActions.TranslatorSetMichelson(response.status, response.text));
  } else {
    console.log('doFetch   MichelineToMichelsonTranslation 3', action);
    yield put(translatorActions.TranslatorSetError(response.text));
  }
}
