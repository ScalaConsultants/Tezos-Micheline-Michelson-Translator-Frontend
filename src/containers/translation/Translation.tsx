import React, { useEffect, useState } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import Translator from "../../components/translator/Translator";
import Library from "../../components/library/Library";
import AppModal from "../../components/shared/modal/AppModal";
import AddTranslation from "../../components/addTranslation/AddTranslation";
import AddIconButton from "../../components/shared/addIconButton/AddIconButton";
import "./Translation.scss";
import { IState } from "../../store/global/types";
import * as translatorTypes from "../../store/translator/types";
import * as libraryTypes from "../../store/library/types";

const mapState = (state: IState) => (
  { translator: state.translator }
)

const Translation = () => {
  const [showModal, setModal] = useState(false);
  const { translator } = useMappedState(mapState);
  const dispatch = useDispatch();

  const handleSetShowModal = (isDisplayed: boolean) => {
    setModal(isDisplayed);
    dispatch({
      type: translatorTypes.TRANSLATOR_MESSAGE_RESET,
    });
  };

  useEffect(() => {
    dispatch({
      type: libraryTypes.LIBRARY_FETCH,
    });
  }, [dispatch]);

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
