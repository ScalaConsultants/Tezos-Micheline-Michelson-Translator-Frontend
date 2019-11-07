import React from "react";
import "./LibraryListItem.scss";
import { LibraryItem as LibraryItemType } from "../../../store/library/types";

type Props = {
  data: LibraryItemType;
  no: number;
};

const LibraryListItem = ({ data, no }: Props) => {
  return (
    <div className="LibraryListItem">
      <div>{no}</div>
      <div>
        some description ewr ewwer wer werwer wer wer werwer werwe rwe rewr wer werwe rwe rewrewr ewr ew ewrewrwer rew
        rew rwerwe rwerwerwerwe rwerwerwe rweewrwe wrwe we rwe werew rwe
      </div>
      <div>{data.source}</div>
      <div>{data.translation}</div>
      <div>
        <span>Accept</span>
        <span>Reject</span>
      </div>
    </div>
  );
};

export default LibraryListItem;
