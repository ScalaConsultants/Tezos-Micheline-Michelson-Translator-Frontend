import * as TranslatorTypes from "../../components/translator/Translator.types";

import {
  TRANSLATOR_SET_MODE,
  TRANSLATOR_SET_MICHELINE,
  TRANSLATOR_SET_MICHELSON,
  TRANSLATOR_FLUSH_TRANSLATION,
  TRANSLATOR_SET_ERROR
} from '../actions/translator'

export type TranslatorState = {
  mode: TranslatorTypes.Modes,
  michelson: string,
  micheline: string,
  error: string
}

export type TranslatorAction = {
  type: string,
  mode: TranslatorTypes.Modes,
  translation: string,
  error? : any
}

const initState: TranslatorState = {
  mode: TranslatorTypes.Modes.MICHELINEMICHELSON,
  michelson: '',
  micheline: '',
  error: ''
};

export const translator = (state: TranslatorState = initState, action: TranslatorAction) => {
    switch (action.type) {
      case TRANSLATOR_SET_MODE:
        return {
          ...state,
          mode: action.mode,
        };
      case TRANSLATOR_SET_MICHELSON:
        return {
          ...state,
          michelson: action.translation,
        };
      case TRANSLATOR_SET_MICHELINE:
        return {
          ...state,
          micheline: action.translation,
        };
      case TRANSLATOR_SET_ERROR:
        return {
          ...state,
          error: action.error
        };
      case TRANSLATOR_FLUSH_TRANSLATION:
        return initState;
      default:
        return state;
    }
};
