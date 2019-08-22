export const TRANSLATOR_FETCH_MICHELSON_TO_MICHELINE = 'TRANSLATOR_FETCH_MICHELSON_TO_MICHELINE';
export const TRANSLATOR_FETCH_MICHELINE_TO_MICHELSON = 'TRANSLATOR_FETCH_MICHELINE_TO_MICHELSON';
export const TRANSLATOR_SET_MICHELINE = 'TRANSLATOR_SET_MICHELINE';
export const TRANSLATOR_SET_MICHELSON = 'TRANSLATOR_SET_MICHELSON';
export const TRANSLATOR_SET_ERROR = 'TRANSLATOR_SE_ERROR';
export const TRANSLATOR_FLUSH_TRANSLATION = 'TRANSLATOR_FLUSH_TRANSLATION';

export const TranslatorFetchMichelsonToMicheline = (payload: any) => ({
  type: TRANSLATOR_FETCH_MICHELSON_TO_MICHELINE,
  payload: payload
});

export const TranslatorFetchMichelineToMichelson = (payload: any) => ({
  type: TRANSLATOR_FETCH_MICHELINE_TO_MICHELSON,
  payload: payload
});

export const TranslatorSetMichelson = (status: any, translation: any) => ({
  type: TRANSLATOR_SET_MICHELSON,
  status: status,
  translation: translation,
});

export const TranslatorSetMicheline = (status: any, translation: any) => ({
  type: TRANSLATOR_SET_MICHELINE,
  status: status,
  translation: translation,
});

export const TranslatorSetError = (error: any) => ({
  type: TRANSLATOR_SET_ERROR,
  error: error
});

export const TranslatorFlushTranslations = () => ({
  type: TRANSLATOR_FLUSH_TRANSLATION
});
