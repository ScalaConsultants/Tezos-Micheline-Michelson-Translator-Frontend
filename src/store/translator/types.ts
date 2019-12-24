export const TRANSLATOR_SET_MODE = "TRANSLATOR_SET_MODE";
export const TRANSLATOR_FETCH_MICHELSON_TO_MICHELINE = "TRANSLATOR_FETCH_MICHELSON_TO_MICHELINE";
export const TRANSLATOR_FETCH_MICHELINE_TO_MICHELSON = "TRANSLATOR_FETCH_MICHELINE_TO_MICHELSON";
export const TRANSLATOR_SET_MICHELINE = "TRANSLATOR_SET_MICHELINE";
export const TRANSLATOR_SET_MICHELSON = "TRANSLATOR_SET_MICHELSON";
export const TRANSLATOR_SET_ERROR = "TRANSLATOR_SE_ERROR";
export const TRANSLATOR_FLUSH_TRANSLATION = "TRANSLATOR_FLUSH_TRANSLATION";
export const TRANSLATOR_SEND_TRANSLATION = "TRANSLATOR_SEND_TRANSLATION";
export const TRANSLATOR_SET_TRANSLATION_MESSAGE = "TRANSLATOR_SET_TRANSLATION_MESSAGE";
export const TRANSLATOR_MESSAGE_SET_ERROR = "TRANSLATOR_MESSAGE_SET_ERROR";
export const TRANSLATOR_MESSAGE_SET_SUCCESS = "TRANSLATOR_MESSAGE_SET_SUCCESS";
export const TRANSLATOR_MESSAGE_RESET = "TRANSLATOR_MESSAGE_RESET";

export type TranslatorState = {
  mode: Modes;
  michelson: string;
  micheline: string;
  error: string;
  isErrorOrEmpty?: boolean
};

export type TranslatorAction = {
  type: string;
  mode: Modes;
  translation: string;
  error?: string;
};

export enum Modes {
  MICHELINEMICHELSON = "michelinemichelson",
  MICHELSONMICHELINE = "michelsonmicheline",
}

export type TranslatorMessageState = {
  title: string;
  author?: string;
  description: string;
  michelson: string;
  micheline: string;
  error: string | null;
  wasSend: boolean | null;
  isTranslationSet: boolean;
};

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
export interface ITranslatorSendTranslation {
  type: typeof TRANSLATOR_SEND_TRANSLATION;
  payload: any;
  captcha: string;
}
export interface ITranslatorSetTranslationMessage {
  type: typeof TRANSLATOR_SET_TRANSLATION_MESSAGE;
  micheline: string;
  michelson: string;
}

export interface ITranslatorMessageSetError {
  type: typeof TRANSLATOR_MESSAGE_SET_ERROR;
  error: string;
}
export interface ITranslatorMessageSetSuccess {
  type: typeof TRANSLATOR_MESSAGE_SET_SUCCESS;
  status: any;
}
export interface ITranslatorMessageReset {
  type: typeof TRANSLATOR_MESSAGE_RESET;
}

export type TranslatorActionTypes =
  | ITranslatorSetMode
  | ITranslatorFetchMichelineToMichelson
  | ITranslatorFetchMichelsonToMicheline
  | ITranslatorSetMicheline
  | ITranslatorSetMichelson
  | ITranslatorSetError
  | ITranslatorFlushTranslation
  | ITranslatorSendTranslation
  | ITranslatorMessageSetError
  | ITranslatorMessageSetSuccess
  | ITranslatorMessageReset
  | ITranslatorSetTranslationMessage;
