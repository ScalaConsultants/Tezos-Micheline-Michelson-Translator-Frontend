import * as TranslatorTypes from "./types";

const translatorInitState: TranslatorTypes.TranslatorState = {
  mode: TranslatorTypes.Modes.MICHELINEMICHELSON,
  michelson: "",
  micheline: "",
  error: "",
};
const translatorMessageInitState: TranslatorTypes.TranslatorMessageState = {
  title: "",
  michelson: "",
  micheline: "",
  description: "",
  author: "",
  error: null,
  wasSend: false,
  isTranslationSet: false,
};

export const translatorReducer = (
  state: TranslatorTypes.TranslatorState = translatorInitState,
  action: TranslatorTypes.TranslatorActionTypes,
): TranslatorTypes.TranslatorState => {
  switch (action.type) {
    case TranslatorTypes.TRANSLATOR_SET_MODE:
      return {
        ...state,
        mode: action.mode,
      };
    case TranslatorTypes.TRANSLATOR_SET_MICHELSON:
      return {
        ...state,
        michelson: action.translation,
      };
    case TranslatorTypes.TRANSLATOR_SET_MICHELINE:
      return {
        ...state,
        micheline: action.translation,
      };
    case TranslatorTypes.TRANSLATOR_SET_ERROR:
      return {
        ...state,
        error: action.error ? action.error : "",
      };
    case TranslatorTypes.TRANSLATOR_FLUSH_TRANSLATION:
      return translatorInitState;
    default:
      return state;
  }
};

export const translatorMessageReducer = (
  state: TranslatorTypes.TranslatorMessageState = translatorMessageInitState,
  action: TranslatorTypes.TranslatorActionTypes,
): TranslatorTypes.TranslatorMessageState => {
  switch (action.type) {
    case TranslatorTypes.TRANSLATOR_SET_TRANSLATION_MESSAGE:
      return {
        ...state,
        micheline: action.micheline,
        michelson: action.michelson,
        isTranslationSet: true,
      };
    case TranslatorTypes.TRANSLATOR_SEND_TRANSLATION:
      return {
        ...state,
        wasSend: null
      };
    case TranslatorTypes.TRANSLATOR_MESSAGE_SET_ERROR:
      return {
        ...state,
        error: action.error,
        wasSend: true,
      };
    case TranslatorTypes.TRANSLATOR_MESSAGE_SET_SUCCESS:
      return {
        ...state,
        error: null,
        wasSend: true,
      };
    case TranslatorTypes.TRANSLATOR_MESSAGE_RESET:
      return translatorMessageInitState;
    default:
      return state;
  }
};
