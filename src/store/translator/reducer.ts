import * as TranslatorTypes from "./types";

const translatorInitState: TranslatorTypes.TranslatorState = {
  mode: TranslatorTypes.Modes.MICHELINEMICHELSON,
  michelson: "",
  micheline: "",
  error: "",
  isErrorOrEmpty: true,
  title: "",
  description: "",
  author: "",
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
        error: "",
        isErrorOrEmpty: false
      };
    case TranslatorTypes.TRANSLATOR_SET_MICHELINE:
      return {
        ...state,
        micheline: action.translation,
        error: "",
        isErrorOrEmpty: false
      };
    case TranslatorTypes.TRANSLATOR_SET_ERROR:
      return {
        ...state,
        error: action.error ? action.error : "",
        isErrorOrEmpty: true
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
    case TranslatorTypes.TRANSLATOR_SET_TRANSLATION_MESSAGE:
      return {
        ...state,
        isTranslationSet: true,
      };
    case TranslatorTypes.TRANSLATOR_FLUSH_TRANSLATION:
      return translatorInitState;
    default:
      return state;
  }
};

