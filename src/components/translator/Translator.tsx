import React, { useEffect, useState } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import * as TranslatorTypes from "../../store/translator/types";
import "./Translator.scss";
import TextField from "../textField/TextField";
import { IState } from "../../store/global/types";
import * as TranslatorActions from "../../store/translator/actions";
import {bindActionCreators} from "redux";

const mapState = (state: IState) => ({
  translator: state.translator,
});

export const translate = (currentMode: TranslatorTypes.Modes, value: string, boundTranslatorActions: typeof TranslatorActions) => {
  let action = null;
  if (currentMode === TranslatorTypes.Modes.MICHELINEMICHELSON && value.trim().length) {
    action = TranslatorTypes.TRANSLATOR_FETCH_MICHELINE_TO_MICHELSON;
    boundTranslatorActions.TranslatorFetchMichelineToMichelson(value);
  }
  else if (currentMode === TranslatorTypes.Modes.MICHELSONMICHELINE && value.trim().length) {
    action = TranslatorTypes.TRANSLATOR_FETCH_MICHELSON_TO_MICHELINE;
    boundTranslatorActions.TranslatorFetchMichelsonToMicheline(value);
  }
  if (!action) return;
};

const Translator = () => {
  const dispatch = useDispatch();
  const { translator } = useMappedState(mapState);
  const [micheline, setMicheline] = useState(translator.micheline);
  const [michelson, setMichelson] = useState(translator.michelson);
  const boundTranslatorActions = bindActionCreators(TranslatorActions, dispatch);

  const setCurrentMode = (mode: TranslatorTypes.Modes) => {
    boundTranslatorActions.TranslatorSetMode(mode);
  };

  useEffect(() => {
    setMichelson(translator.michelson);
  }, [translator.michelson]);

  useEffect(() => {
    setMicheline(translator.micheline);
  }, [translator.micheline]);

  const switchMode = (value?: TranslatorTypes.Modes) => {
    if (value) setCurrentMode(value);
    else if (translator.mode === TranslatorTypes.Modes.MICHELINEMICHELSON)
      setCurrentMode(TranslatorTypes.Modes.MICHELSONMICHELINE);
    else if (translator.mode === TranslatorTypes.Modes.MICHELSONMICHELINE)
      setCurrentMode(TranslatorTypes.Modes.MICHELINEMICHELSON);
  };

  const reduxSetMicheline = (value: string) => {
    switchMode(TranslatorTypes.Modes.MICHELINEMICHELSON);
    boundTranslatorActions.TranslatorSetMicheline(null, value);
    translate(translator.mode, value, boundTranslatorActions);
  };

  const reduxSetMichelson = (value: string) => {
    switchMode(TranslatorTypes.Modes.MICHELSONMICHELINE);
    boundTranslatorActions.TranslatorSetMichelson(null, value);
    translate(translator.mode, value, boundTranslatorActions);
  };

  const getValue = (mode: TranslatorTypes.Modes) => {
    if (mode === TranslatorTypes.Modes.MICHELINEMICHELSON) return micheline;
    if (mode === TranslatorTypes.Modes.MICHELSONMICHELINE) return michelson;
    return "";
  };

  return (
    <div className="Translator">
      <div className="Translator__header">
        <button
          className={translator.mode === TranslatorTypes.Modes.MICHELINEMICHELSON ? "Translator__header-selected" : ""}
          onClick={() => switchMode(TranslatorTypes.Modes.MICHELINEMICHELSON)}
        >
          Micheline
        </button>
        <img
          src="arrows.svg"
          alt=""
          className="Translator__header__translate-button"
          onClick={() => translate(translator.mode, getValue(translator.mode), boundTranslatorActions)}
        />
        <button
          className={translator.mode === TranslatorTypes.Modes.MICHELSONMICHELINE ? "Translator__header-selected" : ""}
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
          clearClick={() => reduxSetMicheline("")}
        />
        <TextField
          value={translator.michelson}
          onValueChange={(val: string) => {
            reduxSetMichelson(val);
          }}
          onClick={() => switchMode(TranslatorTypes.Modes.MICHELSONMICHELINE)}
          clearClick={() => reduxSetMichelson("")}
        />
      </div>
      {translator.error ? <div className="Translator__error-area">{translator.error}</div> : null}
    </div>
  );
};

export default Translator;
