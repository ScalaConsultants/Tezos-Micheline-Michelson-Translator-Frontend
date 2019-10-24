import React, {useCallback, useEffect, useState} from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import * as TranslatorActions from "../../store/actions/translator";
import * as TranslatorType from "../../types/translator";
import {TranslatorState} from "../../store/reducers/translator";
import "./Translator.scss";
import TextField from "../textField/TextField";

interface IState {
  pending: boolean,
  translator: TranslatorState,
  error?: any
}

const mapState = (state: IState) => ({
  translator: state.translator
});

const Translator = () => {
  const dispatch = useDispatch();
  const { translator } = useMappedState(mapState);
  const [currentMode, setCurrentMode] = useState<TranslatorType.ModesType>('michelinemichelson');
  const [micheline, setMicheline] = useState(translator.micheline);
  const [michelson, setMichelson] = useState(translator.michelson);

  useEffect(() => {
    setMichelson(translator.michelson);
  }, [translator.michelson]);

  useEffect(() => {
    setMicheline(translator.micheline);
  }, [translator.micheline]);

  // const translate = (currentMode: string, dispatch: Function, payload: string) => {
  //   if(currentMode === 'michelinemichelson') {
  //     dispatch({
  //       type: TranslatorActions.TRANSLATOR_FETCH_MICHELINE_TO_MICHELSON,
  //       payload: payload
  //     });
  //   }
  //
  //   else if(currentMode === 'michelsonmicheline') {
  //     dispatch({
  //       type: TranslatorActions.TRANSLATOR_FETCH_MICHELSON_TO_MICHELINE,
  //       payload: payload
  //     });
  //   }
  // };

  const translateCallback = useCallback(() => {
    if(currentMode === 'michelinemichelson' && micheline.trim().length) {
      dispatch({
        type: TranslatorActions.TRANSLATOR_FETCH_MICHELINE_TO_MICHELSON,
        payload: micheline
      });
    }

    else if(currentMode === 'michelsonmicheline' && michelson.trim().length) {
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

  const switchMode = (value?: TranslatorType.ModesType) => {
    if(value) setCurrentMode(value);
    else {
      if (currentMode === 'michelinemichelson') setCurrentMode('michelsonmicheline');
      else if (currentMode === 'michelsonmicheline') setCurrentMode('michelinemichelson');
    }
  };

  const reduxSetMicheline = (value: string) => {
    switchMode('michelinemichelson');

    dispatch({
      type: TranslatorActions.TRANSLATOR_SET_MICHELINE,
      translation: value
    });
  };

  const reduxSetMichelson = (value: string) => {
    switchMode('michelsonmicheline');

    dispatch({
      type: TranslatorActions.TRANSLATOR_SET_MICHELSON,
      translation: value
    });

    // setTimeout(() => translate(), 500);
  };

  return (
    <div className="Translator">
      <div className="Translator__header">
        <button className={currentMode === 'michelinemichelson' ? 'Translator__header-selected' : ''} onClick={() => switchMode('michelinemichelson')}>Micheline</button>
        <img src="arrows.svg" alt="" className="Translator__header__translate-button" onClick={() => {}} />
        <button className={currentMode === 'michelsonmicheline' ? 'Translator__header-selected' : ''} onClick={() => switchMode('michelsonmicheline')}>Michelson</button>
      </div>
      <div className="Translator__translator-area">
        <TextField
          value={translator.micheline}
          onValueChange={(val: string) => {reduxSetMicheline(val)}}
          onClick={() => switchMode('michelinemichelson')}
        />
        <TextField
          value={translator.michelson}
          onValueChange={(val: string) => {reduxSetMichelson(val)}}
          onClick={() => switchMode('michelsonmicheline')}
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
