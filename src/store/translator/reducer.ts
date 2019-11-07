import * as TranslatorTypes from "./types";

const translatorInitState: TranslatorTypes.TranslatorState = {
  mode: TranslatorTypes.Modes.MICHELINEMICHELSON,
  michelson: "",
  micheline: "",
  error: "",
};

export const translatorReducer = (
  state: TranslatorTypes.TranslatorState = translatorInitState,
  action: TranslatorTypes.TranslatorAction,
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
