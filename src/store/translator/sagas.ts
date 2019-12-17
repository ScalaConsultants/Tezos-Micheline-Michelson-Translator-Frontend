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
      return { status: response.status, text: await response.text() };
    })
    .catch(error => {
      throw error;
    });
};

export function* doFetchMichelsonToMichelineTranslation(action: translatorTypes.ITranslatorFetchMichelsonToMicheline) {
  const response = yield call(fetchMichelsonToMichelineTranslationRequest, action.payload);
  console.log(response);

  if (response.status === 200) {
    yield put(
      translatorActions.TranslatorSetMicheline(
        response.status,
        JSON.stringify(JSON.parse(response.text), undefined, 2),
      ),
    );
  } else {
    yield put(translatorActions.TranslatorSetError(response.text));
  }
}

const fetchMichelineToMichelsonTranslationRequest = (payload: string) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
    },
    body: payload,
  };

  return fetch(`${process.env.REACT_APP_API_URL}/v1/translate/from/micheline/to/michelson`, options)
    .then(async response => {
      return { status: response.status, text: await response.text() };
    })
    .catch(error => {
      throw error;
    });
};

export function* doFetchMichelineToMichelsonTranslation(action: translatorTypes.ITranslatorFetchMichelineToMichelson) {
  const response = yield call(fetchMichelineToMichelsonTranslationRequest, action.payload);

  response.status === 200
    ? yield put(translatorActions.TranslatorSetMichelson(response.status, response.text))
    : yield put(translatorActions.TranslatorSetError(response.text));
}

const sendTranslationRequest = (payload: any) => {
  const { isEmail = '', email = '', ...body } = { ...payload };
  if (!!isEmail) { body.email = email }

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  };

  return fetch(`${process.env.REACT_APP_API_URL}/v1/library`, options)
    .then(async response => {
      return { status: response.status, text: await response.text() }
    })
    .catch(error => {
      throw error;
    });
};

export function* doSendTranslation(action: translatorTypes.ITranslatorSendTranslation) {
  const response = yield call(sendTranslationRequest, action.payload);
  response.status === 200
    ? yield put(translatorActions.TranslatorMessageSetSuccess(response.status))
    : yield put(translatorActions.TranslatorMessageSetError(response.text));
};
