import * as TranslatorTypes from './types';

import {
  TRANSLATOR_SET_MODE,
  TRANSLATOR_SET_MICHELINE,
  TRANSLATOR_SET_MICHELSON,
  TRANSLATOR_FLUSH_TRANSLATION,
  TRANSLATOR_SET_ERROR,
} from './types';
import { TranslatorAction, TranslatorState } from './types';

const translatorInitState: TranslatorState = {
  mode: TranslatorTypes.Modes.MICHELINEMICHELSON,
  michelson: '',
  micheline: '',
  error: '',
};

export const translatorReducer = (state: TranslatorState = translatorInitState, action: TranslatorAction) => {
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
        error: action.error,
      };
    case TRANSLATOR_FLUSH_TRANSLATION:
      return translatorInitState;
    default:
      return state;
  }
};
