import React from "react";
import "./Contract.scss";
import {LibraryItem as LibraryItemType} from "../../store/library/types";

type Props = {
  data: LibraryItemType;
};

const Contract = ({ data }: Props) => {
  return (
    <div className="Contract">
      <div className="Contract__info-area-wrapper">
        <div className="Contract__detail-wrapper">
          <div className="Contract__detail-wrapper--label">Title</div>
          <div className="Contract__detail-wrapper--content">{data.title}</div>
        </div>
      </div>
      <div className="Contract__info-area-wrapper">
        <div className="Contract__description-wrapper">
          <div className="Contract__description-wrapper--label">Description</div>
          <div className="Contract__description-wrapper--content">
            {data.description}
          </div>
        </div>
      </div>
      <div className="Contract__wrapper2">
        <div className="Contract__label">Micheline</div>
        <div className="Contract__content">{data.micheline}</div>
      </div>
      <div className="Contract__wrapper2">
        <div className="Contract__label">Michelson</div>
        <div className="Contract__content">{data.michelson}</div>
      </div>
    </div>
  );
};

export default Contract;
