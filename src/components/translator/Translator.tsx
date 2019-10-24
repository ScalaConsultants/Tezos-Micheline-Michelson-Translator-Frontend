import React, {useCallback, useEffect, useState} from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import * as TranslatorActions from "../../store/actions/translator";
import * as TranslatorTypes from "./Translator.types";
import "./Translator.scss";
import TextField from "../textField/TextField";

const mapState = (state: TranslatorTypes.IState) => ({
  translator: state.translator
});

const Translator = () => {
  const dispatch = useDispatch();
  const { translator } = useMappedState(mapState);
  const [currentMode, setCurrentMode] = useState(TranslatorTypes.Modes.MICHELINEMICHELSON);
  const [micheline, setMicheline] = useState(translator.micheline);
  const [michelson, setMichelson] = useState(translator.michelson);

  useEffect(() => {
    setMichelson(translator.michelson);
  }, [translator.michelson]);

  useEffect(() => {
    setMicheline(translator.micheline);
  }, [translator.micheline]);

  const translateCallback = useCallback(() => {
    if(currentMode === TranslatorTypes.Modes.MICHELINEMICHELSON && micheline.trim().length) {
      dispatch({
        type: TranslatorActions.TRANSLATOR_FETCH_MICHELINE_TO_MICHELSON,
        payload: micheline
      });
    }

    else if(currentMode === TranslatorTypes.Modes.MICHELSONMICHELINE && michelson.trim().length) {
      dispatch({
        type: TranslatorActions.TRANSLATOR_FETCH_MICHELSON_TO_MICHELINE,
        payload: michelson
      });
    }
  }, [currentMode, dispatch, micheline, michelson]);

  useEffect(() => {
    if(micheline.trim().length) translateCallback();
  }, [micheline, translateCallback]);


  useEffect(() => {
    if(michelson.trim().length) translateCallback();
  }, [michelson, translateCallback]);

  const switchMode = (value?: TranslatorTypes.Modes) => {
    if(value) setCurrentMode(value);
    else {
      if (currentMode === TranslatorTypes.Modes.MICHELINEMICHELSON) setCurrentMode(TranslatorTypes.Modes.MICHELSONMICHELINE);
      else if (currentMode === TranslatorTypes.Modes.MICHELSONMICHELINE) setCurrentMode(TranslatorTypes.Modes.MICHELINEMICHELSON);
    }
  };

  const reduxSetMicheline = (value: string) => {
    switchMode(TranslatorTypes.Modes.MICHELINEMICHELSON);

    dispatch({
      type: TranslatorActions.TRANSLATOR_SET_MICHELINE,
      translation: value
    });
  };

  const reduxSetMichelson = (value: string) => {
    switchMode(TranslatorTypes.Modes.MICHELSONMICHELINE);

    dispatch({
      type: TranslatorActions.TRANSLATOR_SET_MICHELSON,
      translation: value
    });
  };

  return (
    <div className="Translator">
      <div className="Translator__header">
        <button className={currentMode === TranslatorTypes.Modes.MICHELINEMICHELSON ? 'Translator__header-selected' : ''} onClick={() => switchMode(TranslatorTypes.Modes.MICHELINEMICHELSON)}>Micheline</button>
        <img src="arrows.svg" alt="" className="Translator__header__translate-button" />
        <button className={currentMode === TranslatorTypes.Modes.MICHELSONMICHELINE ? 'Translator__header-selected' : ''} onClick={() => switchMode(TranslatorTypes.Modes.MICHELSONMICHELINE)}>Michelson</button>
      </div>
      <div className="Translator__translator-area">
        <TextField
          value={translator.micheline}
          onValueChange={(val: string) => {reduxSetMicheline(val)}}
          onClick={() => switchMode(TranslatorTypes.Modes.MICHELINEMICHELSON)}
        />
        <TextField
          value={translator.michelson}
          onValueChange={(val: string) => {reduxSetMichelson(val)}}
          onClick={() => switchMode(TranslatorTypes.Modes.MICHELSONMICHELINE)}
        />
      </div>
      <div className="Translator__buttons-area">
        <img src="delete.svg" alt="Clear input" onClick={() => reduxSetMicheline('')} />
        <img src="delete.svg" alt="Clear input" onClick={() => reduxSetMichelson('')} />
      </div>
      {translator.error ? <div className="Translator__error-area">{translator.error}</div> : null}
    </div>
  );
};

export default Translator;
