import React, { useEffect, useState } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import * as TranslatorTypes from '../../store/translator/types';
import './Translator.scss';
import TextField from '../textField/TextField';

const mapState = (state: TranslatorTypes.IState) => ({
  translator: state.translator,
});

export const translate = (currentMode: TranslatorTypes.Modes, value: string, dispatch: Function) => {
  let action = null;
  if (currentMode === TranslatorTypes.Modes.MICHELINEMICHELSON && value.trim().length)
    action = TranslatorTypes.TRANSLATOR_FETCH_MICHELINE_TO_MICHELSON;
  else if (currentMode === TranslatorTypes.Modes.MICHELSONMICHELINE && value.trim().length)
    action = TranslatorTypes.TRANSLATOR_FETCH_MICHELSON_TO_MICHELINE;
  if (!action) return;

  dispatch({
    type: action,
    payload: value,
  });
};

const Translator = () => {
  const dispatch = useDispatch();
  const { translator } = useMappedState(mapState);
  const [micheline, setMicheline] = useState(translator.micheline);
  const [michelson, setMichelson] = useState(translator.michelson);

  const setCurrentMode = (mode: TranslatorTypes.Modes) => {
    dispatch({
      type: TranslatorTypes.TRANSLATOR_SET_MODE,
      mode: mode,
    });
  };

  useEffect(() => {
    setMichelson(translator.michelson);
  }, [translator.michelson]);

  useEffect(() => {
    setMicheline(translator.micheline);
  }, [translator.micheline]);

  const switchMode = (value?: TranslatorTypes.Modes) => {
    if (value) setCurrentMode(value);
    else {
      if (translator.mode === TranslatorTypes.Modes.MICHELINEMICHELSON)
        setCurrentMode(TranslatorTypes.Modes.MICHELSONMICHELINE);
      else if (translator.mode === TranslatorTypes.Modes.MICHELSONMICHELINE)
        setCurrentMode(TranslatorTypes.Modes.MICHELINEMICHELSON);
    }
  };

  const reduxSetMicheline = (value: string) => {
    switchMode(TranslatorTypes.Modes.MICHELINEMICHELSON);

    dispatch({
      type: TranslatorTypes.TRANSLATOR_SET_MICHELINE,
      translation: value,
    });

    translate(translator.mode, value, dispatch);
  };

  const reduxSetMichelson = (value: string) => {
    switchMode(TranslatorTypes.Modes.MICHELSONMICHELINE);

    dispatch({
      type: TranslatorTypes.TRANSLATOR_SET_MICHELSON,
      translation: value,
    });

    translate(translator.mode, value, dispatch);
  };

  const getValue = (mode: TranslatorTypes.Modes) => {
    if (mode === TranslatorTypes.Modes.MICHELINEMICHELSON) return micheline;
    else if (mode === TranslatorTypes.Modes.MICHELSONMICHELINE) return michelson;
    else return '';
  };

  return (
    <div className="Translator">
      <div className="Translator__header">
        <button
          className={translator.mode === TranslatorTypes.Modes.MICHELINEMICHELSON ? 'Translator__header-selected' : ''}
          onClick={() => switchMode(TranslatorTypes.Modes.MICHELINEMICHELSON)}
        >
          Micheline
        </button>
        <img
          src="arrows.svg"
          alt=""
          className="Translator__header__translate-button"
          onClick={() => translate(translator.mode, getValue(translator.mode), dispatch)}
        />
        <button
          className={translator.mode === TranslatorTypes.Modes.MICHELSONMICHELINE ? 'Translator__header-selected' : ''}
          onClick={() => switchMode(TranslatorTypes.Modes.MICHELSONMICHELINE)}
        >
          Michelson
        </button>
      </div>
      <div className="Translator__translator-area">
        <TextField
          value={translator.micheline}
          onValueChange={(val: string) => {
            reduxSetMicheline(val);
          }}
          onClick={() => switchMode(TranslatorTypes.Modes.MICHELINEMICHELSON)}
          clearClick={() => reduxSetMicheline('')}
        />
        <TextField
          value={translator.michelson}
          onValueChange={(val: string) => {
            reduxSetMichelson(val);
          }}
          onClick={() => switchMode(TranslatorTypes.Modes.MICHELSONMICHELINE)}
          clearClick={() => reduxSetMichelson('')}
        />
      </div>
      {translator.error ? <div className="Translator__error-area">{translator.error}</div> : null}
    </div>
  );
};

export default Translator;
