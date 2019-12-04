import * as TranslatorTypes from "./types";

export const TranslatorSetMode = (mode: TranslatorTypes.Modes): TranslatorTypes.TranslatorActionTypes => {
  console.log('ACTION mode: ', mode);

  return ({
  type: TranslatorTypes.TRANSLATOR_SET_MODE,
  mode,
})};

export const TranslatorFetchMichelsonToMicheline = (payload: string): TranslatorTypes.TranslatorActionTypes => {
  console.log('ACTION Mic to MIL payload: ', payload);

  return ({
  type: TranslatorTypes.TRANSLATOR_FETCH_MICHELSON_TO_MICHELINE,
  payload,
})};

export const TranslatorFetchMichelineToMichelson = (payload: string): TranslatorTypes.TranslatorActionTypes => {
  console.log('ACTION Mil to MIC payload: ', payload);

  return ({
  type: TranslatorTypes.TRANSLATOR_FETCH_MICHELINE_TO_MICHELSON,
  payload,
})};

export const TranslatorSetMichelson = (status: number, translation: string): TranslatorTypes.TranslatorActionTypes => {
  console.log('ACTION set Mic status: number, translation: string: ', status, translation);

  return ({
  type: TranslatorTypes.TRANSLATOR_SET_MICHELSON,
  status,
  translation,
})};

export const TranslatorSetMicheline = (status: number, translation: string): TranslatorTypes.TranslatorActionTypes => {
  console.log('ACTION set Mil status: number, translation: string: ', status, translation);
  return ({
  type: TranslatorTypes.TRANSLATOR_SET_MICHELINE,
  status,
  translation,
})};

export const TranslatorSetError = (error: string): TranslatorTypes.TranslatorActionTypes =>{
  console.log('ACTION set error: ', error);

  return ({
  type: TranslatorTypes.TRANSLATOR_SET_ERROR,
  error,
})};

export const TranslatorFlushTranslation = (): TranslatorTypes.TranslatorActionTypes => {
  console.log("ACTION FLUSH");
  return ({
  type: TranslatorTypes.TRANSLATOR_FLUSH_TRANSLATION,
})};
