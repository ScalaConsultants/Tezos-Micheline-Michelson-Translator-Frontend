import React, { useEffect } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import { Redirect } from "react-router-dom";
import LibraryListItem from "./LibraryListItem";
import "./LibraryList.scss";
import { IState } from "../../../store/global/types";
import * as adminLibraryTypes from "../../../store/adminLibrary/types";

const mapState = (state: IState) => ({
  library: state.adminLibrary,
  auth: state.auth,
});

const LibraryList = () => {
  const { library, auth } = useMappedState(mapState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: adminLibraryTypes.ADMIN_LIBRARY_FETCH,
    });
  }, [dispatch]);

  const redirectToLogin = () => !auth.isLogged && <Redirect to="/login" />;

  return (
    <div className="LibraryList">
      {redirectToLogin()}
      <div className="LibraryList__header">
        <div>Item</div>
        <div>Name</div>
        <div>Description</div>
        <div>Micheline</div>
        <div>Michelson</div>
      </div>
      {library.map((item, key) => (
        <LibraryListItem data={item} key={`${item.uid}${key.toString()}`} no={key + 1} />
      ))}
    </div>
  );
};

export default LibraryList;
