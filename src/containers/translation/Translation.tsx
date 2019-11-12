import React, { useState } from "react";
import Translator from "../../components/translator/Translator";
import Library from "../../components/library/Library";
import AppModal from "../../components/shared/modal/AppModal";
import AddTranslation from "../../components/addTranslation/AddTranslation";
import AddButton from "../../components/shared/addButton/AddButton";
import "./Translation.scss";

const Translation = () => {
  const [showModal, setModal] = useState(false);

  return (
    <div className="Translation">
      <h1>Converter</h1>
      <Translator />
      <h1>Library</h1>
      <div className="Translation__buttons-area">
        <AddButton handleClick={() => setModal(true)} />
      </div>
      <Library />
      <AppModal showModal={showModal} setShowModal={setModal}>
        <AddTranslation setShowModal={setModal} />
      </AppModal>
    </div>
  );
};

export default Translation;
