import React from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import "./Library.scss";
import LibraryItem from "./LibraryItem";
import { translate } from "../translator/Translator";
import * as TranslatorTypes from "../../store/translator/types";
import { IState } from "../../store/global/types";
import * as TranslatorActions from "../../store/translator/actions";
import {bindActionCreators} from "redux";

const mapState = (state: IState) => ({
  library: state.library,
});

const Library = () => {
  const dispatch = useDispatch();
  const { library } = useMappedState(mapState);
  const boundTranslatorActions = bindActionCreators(TranslatorActions, dispatch);

  const selectMicheline = (value: string) => {
    boundTranslatorActions.TranslatorSetMode(TranslatorTypes.Modes.MICHELINEMICHELSON);
    boundTranslatorActions.TranslatorSetMicheline(null, value);
    translate(TranslatorTypes.Modes.MICHELINEMICHELSON, value, boundTranslatorActions);
  };

  const selectMichelson = (value: string) => {
    boundTranslatorActions.TranslatorSetMode(TranslatorTypes.Modes.MICHELSONMICHELINE);
    boundTranslatorActions.TranslatorSetMichelson(null, value);
    translate(TranslatorTypes.Modes.MICHELSONMICHELINE, value, boundTranslatorActions);
  };

  return (
    <div className="Library">
      {library.map((item, key) => (
        <LibraryItem
          selectMicheline={selectMicheline}
          selectMichelson={selectMichelson}
          data={item}
          key={`${item.uid}${key.toString()}`}
        />
      ))}
    </div>
  );
};

export default Library;
