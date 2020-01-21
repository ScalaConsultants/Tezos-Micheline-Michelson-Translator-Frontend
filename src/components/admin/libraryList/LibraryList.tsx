import React, { useEffect } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import LibraryListItem from "./LibraryListItem";
import "./LibraryList.scss";
import { IState } from "../../../store/global/types";
import * as adminLibraryActions from "../../../store/adminLibrary/actions";
import {useRouter} from "next/router";
import {bindActionCreators} from "redux";

const mapState = (state: IState) => ({
  library: state.adminLibrary,
  auth: state.auth,
});

const LibraryList = () => {
  const { library, auth } = useMappedState(mapState);
  const dispatch = useDispatch();
  const router = useRouter();
  const boundAdminLibraryActions = bindActionCreators(adminLibraryActions, dispatch);

  useEffect(() => {
    boundAdminLibraryActions.LibraryFetch();
  }, [boundAdminLibraryActions]);

  const redirectToLogin = () => !auth.isLogged && router.push("/login");

  return (
    <div className="LibraryList">
      <div className="LibraryList__header">
        <div>Item</div>
        <div>Title</div>
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
