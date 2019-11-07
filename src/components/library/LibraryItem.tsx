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
          <div className="LibraryItem__detail-wrapper--label">Name</div>
          <div className="LibraryItem__detail-wrapper--content">some name</div>
        </div>
        <div className="LibraryItem__detail-wrapper">
          <div className="LibraryItem__detail-wrapper--label">Date created</div>
          <div className="LibraryItem__detail-wrapper--content">2019-01-01</div>
        </div>
        <div className="LibraryItem__detail-wrapper">
          <div className="LibraryItem__detail-wrapper--label">Date created</div>
          <div className="LibraryItem__detail-wrapper--content">2019-01-01</div>
        </div>
      </div>
      <div className="LibraryItem__info-area-wrapper">
        <div className="LibraryItem__description-wrapper">
          <div className="LibraryItem__description-wrapper--label">Description</div>
          <div className="LibraryItem__description-wrapper--content">
            some description ewr ewwer wer werwer wer wer werwer werwe rwe rewr wer werwe rwe rewrewr ewr ew ewrewrwer
            rew rwerwe rwerwerwerwe rwerwerwe rweewrwe wrwe we rwe werew rwe
          </div>
        </div>
      </div>
      <div
        role="button"
        tabIndex={-1}
        className="LibraryItem__wrapper2"
        onClick={() => selectMicheline(data.source)}
        onKeyUp={() => {}}
      >
        <div className="LibraryItem__label">Micheline</div>
        <div className="LibraryItem__content">{data.source}</div>
      </div>
      <div
        role="button"
        tabIndex={-1}
        className="LibraryItem__wrapper2"
        onClick={() => selectMichelson(data.translation)}
        onKeyUp={() => {}}
      >
        <div className="LibraryItem__label">Michelson</div>
        <div className="LibraryItem__content">{data.translation}</div>
      </div>
    </div>
  );
};

export default LibraryItem;
