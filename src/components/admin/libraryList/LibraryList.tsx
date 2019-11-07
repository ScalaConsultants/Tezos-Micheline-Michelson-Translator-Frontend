import React from "react";
import { useMappedState } from "redux-react-hook";
import "./LibraryList.scss";
import LibraryListItem from "./LibraryListItem";
import * as LibraryTypes from "../../../store/library/types";

const mapState = (state: LibraryTypes.IState) => ({
  library: state.library,
});

const LibraryList = () => {
  const { library } = useMappedState(mapState);

  return (
    <div className="LibraryList">
      <div className="LibraryList__header">
        <div>No.</div>
        <div>Description</div>
        <div>Micheline</div>
        <div>Michelson</div>
        <div>Action</div>
      </div>
      {library.map((item, key) => (
        <LibraryListItem data={item} key={`${item.source}${key.toString()}`} no={key + 1} />
      ))}
    </div>
  );
};

export default LibraryList;
