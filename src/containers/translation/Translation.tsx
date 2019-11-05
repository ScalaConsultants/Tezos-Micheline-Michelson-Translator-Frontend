<<<<<<< HEAD
import React, { useState } from 'react';
import Translator from "../../components/translator/Translator";
import Library from "../../components/library/Library";
import AppModal from '../../components/shared/modal/AppModal';
import AddTranslation from '../../components/addTranslation/AddTranslation';
=======
import React from 'react';
import Translator from '../../components/translator/Translator';
import Library from '../../components/library/Library';
>>>>>>> 4136e762ff01e4a71c755ceae9480e0582607dca

const Translation = () => {
  const [showModal, setModal] = useState(false);

  return (
    <div>
      <h1>Converter</h1>
      <Translator />
      <h1>Library</h1>
      <Library />
<<<<<<< HEAD
      <AppModal showModal={showModal} setShowModal={setModal}>
        <AddTranslation setShowModal={setModal} />
      </AppModal>
=======
>>>>>>> 4136e762ff01e4a71c755ceae9480e0582607dca
    </div>
  );
};

export default Translation;
