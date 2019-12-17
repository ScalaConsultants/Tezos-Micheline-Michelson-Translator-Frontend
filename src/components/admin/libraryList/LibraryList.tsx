import React from "react";
import { useMappedState } from "redux-react-hook";
import { Redirect } from "react-router-dom";
import LibraryListItem from "./LibraryListItem";
import "./LibraryList.scss";
import { IState } from "../../../store/global/types";

const mapState = (state: IState) => ({
  library: state.library,
  auth: state.auth,
});

const LibraryList = () => {
  const { library, auth } = useMappedState(mapState);

  const redirectToLogin = () => !auth.isLogged && <Redirect to="/admin" />;

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
