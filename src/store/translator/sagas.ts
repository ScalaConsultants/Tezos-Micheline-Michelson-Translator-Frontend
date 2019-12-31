import { put, call } from "redux-saga/effects";
import * as translatorActions from "./actions";
import * as translatorTypes from "./types";
import TranslatorService from "../../services/translator.service";

export function* doFetchMichelsonToMichelineTranslation(action: translatorTypes.ITranslatorFetchMichelsonToMicheline) {
  const translatorService = new TranslatorService();
  const response = yield call(translatorService.michelsonToMicheline, action.payload);

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

export function* doFetchMichelineToMichelsonTranslation(action: translatorTypes.ITranslatorFetchMichelineToMichelson) {
  const translationService = new TranslatorService();
  const response = yield call(translationService.michelineToMichelson, action.payload);

  response.status === 200
    ? yield put(translatorActions.TranslatorSetMichelson(response.status, response.text))
    : yield put(translatorActions.TranslatorSetError(response.text));
}

export function* doSendTranslation(action: translatorTypes.ITranslatorSendTranslation) {
  const translationService = new TranslatorService();
  const response = yield call(translationService.publish, action.payload, action.captcha);
  response.status === 200
    ? yield put(translatorActions.TranslatorMessageSetSuccess(response.status))
    : yield put(translatorActions.TranslatorMessageSetError(response.text));
}
