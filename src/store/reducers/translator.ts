import {
  TRANSLATOR_SET_MICHELINE,
  TRANSLATOR_SET_MICHELSON,
  TRANSLATOR_FLUSH_TRANSLATION,
  TRANSLATOR_SET_ERROR
} from '../actions/translator'

export type TranslatorState = {
  michelson: string,
  micheline: string,
  error: string
}

export type TranslatorAction = {
  type: string,
  translation: string,
  error? : any
}

const initState: TranslatorState = {
  michelson: '',
  micheline: '',
  error: ''
};

export const translator = (state: TranslatorState = initState, action: TranslatorAction) => {
    switch (action.type) {
      case TRANSLATOR_SET_MICHELSON:
        return {
          michelson: action.translation,
          micheline: state.micheline,
          error: ''
        };
      case TRANSLATOR_SET_MICHELINE:
        return {
          michelson: state.michelson,
          micheline: action.translation,
          error: ''
        };
      case TRANSLATOR_SET_ERROR:
        return {
          michelson: state.michelson,
          micheline: state.micheline,
          error: action.error
        };
      case TRANSLATOR_FLUSH_TRANSLATION:
        return initState;
      default:
        return state;
    }
};
