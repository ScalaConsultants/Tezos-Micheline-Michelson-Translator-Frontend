import React from "react";
import { useMappedState } from "redux-react-hook";
import "./LibraryList.scss";
import LibraryListItem from "./LibraryListItem";
import * as LibraryTypes from "../../../store/library/types";
import { Redirect } from "react-router-dom";

const mapState = (state: LibraryTypes.IState) => ({
  library: state.library,
  auth: state.auth,
});

const LibraryList = () => {
  const { library, auth } = useMappedState(mapState);

  const redirectToLogin = () => {
    if (!auth.loggedIn) {
      return <Redirect to="/admin" />;
    }
  };

  return (
    <div className="LibraryList">
      {redirectToLogin()}
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
