import React, { useState } from 'react';
import Translator from "../../components/translator/Translator";
import Library from "../../components/library/Library";
import AppModal from '../../components/shared/modal/AppModal';
import AddTranslation from '../../components/addTranslation/AddTranslation';

const Translation = () => {
  const [showModal, setModal] = useState(false);

  return (
    <div>
      <h1>Converter</h1>
      <Translator />
      <h1>Library</h1>
      <Library />
      <AppModal showModal={showModal} setShowModal={setModal}>
        <AddTranslation setShowModal={setModal} />
      </AppModal>
    </div>
  );
};

export default Translation;
