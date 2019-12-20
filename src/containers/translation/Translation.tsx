import React, { useState } from "react";
import Translator from "../../components/translator/Translator";
import {  useDispatch } from "redux-react-hook";
import Library from "../../components/library/Library";
import AppModal from "../../components/shared/modal/AppModal";
import AddTranslation from "../../components/addTranslation/AddTranslation";
import AddButton from "../../components/shared/addButton/AddButton";
import "./Translation.scss";
import * as translatorTypes from "../../store/translator/types";


const Translation = () => {
  const [showModal, setModal] = useState(false);
  const dispatch = useDispatch();

  const handleSetShowModal = (isDisplayed: boolean) => {
    setModal(isDisplayed);
    dispatch({
      type: translatorTypes.TRANSLATOR_MESSAGE_RESET,
    });
  }

  return (
    <div className="Translation">
      <h1>Converter</h1>
      <Translator />
      <h1>Library</h1>
      <div className="Translation__buttons-area">
        <AddButton handleClick={() => setModal(true)} />
      </div>
      <Library />
      <AppModal showModal={showModal} setShowModal={handleSetShowModal}>
        <AddTranslation setShowModal={setModal} />
      </AppModal>
    </div>
  );
};

export default Translation;
