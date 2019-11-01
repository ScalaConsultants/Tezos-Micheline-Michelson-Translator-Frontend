import React from 'react';
import Translator from "../../components/translator/Translator";
import Library from "../../components/library/Library";

const Translation = () => {
  return (
    <div>
      <h1>Converter</h1>
      <Translator/>
      <h1>Library</h1>
      <Library/>
    </div>
  );
};

export default Translation;
