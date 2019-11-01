import React from 'react';
import "./LibraryItem.scss";
import {LibraryItem as LibraryItemType}  from "../../store/reducers/library";

type Props = {
  selectMicheline: Function,
  selectMichelson: Function,
  data: LibraryItemType
}

const LibraryItem = ({
  selectMicheline,
  selectMichelson,
  data
}: Props) => {

  return (
    <div className="LibraryItem">
      <div className="LibraryItem__wrapper" onClick={() => selectMicheline(data.source)}>
        <div className="LibraryItem__label">Micheline</div>
        <div className="LibraryItem__content">{data.source}</div>
      </div>
      <div className="LibraryItem__wrapper" onClick={() => selectMichelson(data.translation)}>
        <div className="LibraryItem__label">Michelson</div>
        <div className="LibraryItem__content">{data.translation}</div>
      </div>
    </div>
  );
};

export default LibraryItem;
