import React, { useEffect, useState } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import Translator from "../../components/translator/Translator";
import Library from "../../components/library/Library";
import AppModal from "../../components/shared/modal/AppModal";
import AddTranslation from "../../components/addTranslation/AddTranslation";
import AddIconButton from "../../components/shared/addIconButton/AddIconButton";
import "./Translation.scss";
import { IState } from "../../store/global/types";
import * as translatorActions from "../../store/translator/actions";
import * as libraryActions from "../../store/library/actions";
import {bindActionCreators} from "redux";

const mapState = (state: IState) => (
  { translator: state.translator }
);

const Translation = () => {
  const [showModal, setModal] = useState(false);
  const { translator } = useMappedState(mapState);
  const dispatch = useDispatch();
  const boundTranslatorActions = bindActionCreators(translatorActions, dispatch);
  const boundLibraryActions = bindActionCreators(libraryActions, dispatch);

  const handleSetShowModal = (isDisplayed: boolean) => {
    setModal(isDisplayed);
    boundTranslatorActions.TranslatorMessageReset();
  };

  useEffect(() => {
    boundLibraryActions.LibraryFetch();
  }, [boundLibraryActions]);

  return (
    <div className="Translation">
      <h1>Converter</h1>
      <Translator />
      <h1>Library</h1>
      <div className="Translation__buttons-area">
        <AddIconButton label="add Translation" type="button" onClick={() => setModal(true)} disabled={!!translator.isErrorOrEmpty} />
      </div>
      <Library />
      <AppModal showModal={showModal} setShowModal={handleSetShowModal}>
        <AddTranslation setShowModal={setModal} />
      </AppModal>
    </div>
  );
};

export default Translation;
