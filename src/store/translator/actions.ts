import * as TranslatorTypes from "./types";

export const TranslatorSetMode = (mode: TranslatorTypes.Modes): TranslatorTypes.TranslatorActionTypes => ({
  type: TranslatorTypes.TRANSLATOR_SET_MODE,
  mode,
});

export const TranslatorFetchMichelsonToMicheline = (payload: string): TranslatorTypes.TranslatorActionTypes => ({
  type: TranslatorTypes.TRANSLATOR_FETCH_MICHELSON_TO_MICHELINE,
  payload,
});

export const TranslatorFetchMichelineToMichelson = (payload: string): TranslatorTypes.TranslatorActionTypes => ({
  type: TranslatorTypes.TRANSLATOR_FETCH_MICHELINE_TO_MICHELSON,
  payload,
});

export const TranslatorSetMichelson = (status: number, translation: string): TranslatorTypes.TranslatorActionTypes => ({
  type: TranslatorTypes.TRANSLATOR_SET_MICHELSON,
  status,
  translation,
});

export const TranslatorSetMicheline = (status: number, translation: string): TranslatorTypes.TranslatorActionTypes => ({
  type: TranslatorTypes.TRANSLATOR_SET_MICHELINE,
  status,
  translation,
});

export const TranslatorSetError = (error: string): TranslatorTypes.TranslatorActionTypes => ({
  type: TranslatorTypes.TRANSLATOR_SET_ERROR,
  error,
});

export const TranslatorMessageSetError = (error: string): TranslatorTypes.TranslatorActionTypes => ({
  type: TranslatorTypes.TRANSLATOR_MESSAGE_SET_ERROR,
  error,
});
export const TranslatorMessageSetSuccess = (status: any): TranslatorTypes.TranslatorActionTypes => ({
  type: TranslatorTypes.TRANSLATOR_MESSAGE_SET_SUCCESS,
  status
});
export const TranslatorMessageReset = (): TranslatorTypes.TranslatorActionTypes => ({
  type: TranslatorTypes.TRANSLATOR_MESSAGE_RESET,
});
export const TranslatorSendTranslation = (values: any): any => ({
  type: TranslatorTypes.TRANSLATOR_SEND_TRANSLATION,
  values,
});
export const TranslatorFlushTranslation = (): TranslatorTypes.TranslatorActionTypes => ({
  type: TranslatorTypes.TRANSLATOR_FLUSH_TRANSLATION,
});
