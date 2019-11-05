export const TRANSLATOR_SET_MODE = 'TRANSLATOR_SET_MODE';
export const TRANSLATOR_FETCH_MICHELSON_TO_MICHELINE = 'TRANSLATOR_FETCH_MICHELSON_TO_MICHELINE';
export const TRANSLATOR_FETCH_MICHELINE_TO_MICHELSON = 'TRANSLATOR_FETCH_MICHELINE_TO_MICHELSON';
export const TRANSLATOR_SET_MICHELINE = 'TRANSLATOR_SET_MICHELINE';
export const TRANSLATOR_SET_MICHELSON = 'TRANSLATOR_SET_MICHELSON';
export const TRANSLATOR_SET_ERROR = 'TRANSLATOR_SE_ERROR';
export const TRANSLATOR_FLUSH_TRANSLATION = 'TRANSLATOR_FLUSH_TRANSLATION';

export type TranslatorState = {
  mode: Modes;
  michelson: string;
  micheline: string;
  error: string;
};

export type TranslatorAction = {
  type: string;
  mode: Modes;
  translation: string;
  error?: any;
};

export enum Modes {
  MICHELINEMICHELSON = 'michelinemichelson',
  MICHELSONMICHELINE = 'michelsonmicheline',
}

export interface IState {
  pending: boolean;
  translator: TranslatorState;
  error?: any;
}

export interface ITranslatorSetMode {
  type: typeof TRANSLATOR_SET_MODE;
  mode: Modes;
}

export interface ITranslatorFetchMichelineToMichelson {
  type: typeof TRANSLATOR_FETCH_MICHELINE_TO_MICHELSON;
  payload: string;
}

export interface ITranslatorFetchMichelsonToMicheline {
  type: typeof TRANSLATOR_FETCH_MICHELSON_TO_MICHELINE;
  payload: string;
}

export interface ITranslatorSetMichelson {
  type: typeof TRANSLATOR_SET_MICHELSON;
  status: number;
  translation: string;
}

export interface ITranslatorSetMicheline {
  type: typeof TRANSLATOR_SET_MICHELINE;
  status: number;
  translation: string;
}

export interface ITranslatorSetError {
  type: typeof TRANSLATOR_SET_ERROR;
  error: string;
}

export interface ITranslatorFlushTranslation {
  type: typeof TRANSLATOR_FLUSH_TRANSLATION;
}

export type TranslatorActionTypes =
  | ITranslatorSetMode
  | ITranslatorFetchMichelineToMichelson
  | ITranslatorFetchMichelsonToMicheline
  | ITranslatorSetMicheline
  | ITranslatorSetMichelson
  | ITranslatorSetError
  | ITranslatorFlushTranslation;
