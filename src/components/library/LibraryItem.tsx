import React from "react";
import "./LibraryItem.scss";
import { LibraryItem as LibraryItemType } from "../../store/library/types";

type Props = {
  selectMicheline: Function;
  selectMichelson: Function;
  data: LibraryItemType;
};

const LibraryItem = ({ selectMicheline, selectMichelson, data }: Props) => {
  return (
    <div className="LibraryItem">
      <div className="LibraryItem__info-area-wrapper">
        <div className="LibraryItem__detail-wrapper">
          <div className="LibraryItem__detail-wrapper--label">Title</div>
          <div className="LibraryItem__detail-wrapper--content">{data.title}</div>
        </div>
      </div>
      <div className="LibraryItem__info-area-wrapper">
        <div className="LibraryItem__description-wrapper">
          <div className="LibraryItem__description-wrapper--label">Description</div>
          <div className="LibraryItem__description-wrapper--content">
            {data.description}
          </div>
        </div>
      </div>
      <div className="LibraryItem__wrapper2" onClick={() => selectMicheline(data.micheline)}>
        <div className="LibraryItem__label">Micheline</div>
        <div className="LibraryItem__content">{data.micheline}</div>
      </div>
      <div className="LibraryItem__wrapper2" onClick={() => selectMichelson(data.michelson)}>
        <div className="LibraryItem__label">Michelson</div>
        <div className="LibraryItem__content">{data.michelson}</div>
      </div>
    </div>
  );
};

export default LibraryItem;
