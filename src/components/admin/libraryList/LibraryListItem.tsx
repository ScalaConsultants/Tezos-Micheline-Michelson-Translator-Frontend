import React from "react";
import "./LibraryListItem.scss";
import { useDispatch } from "redux-react-hook";
import * as adminLibraryTypes from "../../../store/adminLibrary/types";

type Props = {
  data: adminLibraryTypes.AdminLibraryItem;
  no: number;
};

const LibraryListItem = ({ data, no }: Props) => {
  const dispatch = useDispatch();

  const setStatus = (item: string, status: adminLibraryTypes.adminLibraryItemStatusType) => {
    dispatch({
      type: adminLibraryTypes.ADMIN_LIBRARY_SET_STATUS,
      item,
      status,
    });
  };

  const deleteItem = (item: string) => {
    dispatch({
      type: adminLibraryTypes.ADMIN_LIBRARY_DELETE,
      item,
    });
  };

  return (
    <div className="LibraryListItem">
      <div className="LibraryListItem__column">
        <div className="LibraryListItem__basic-data">
          <div>{no}</div>
          <div>{data.author}</div>
          <div>{data.email}</div>
          <div>{data.status}</div>
          <div>
            <span onClick={() => setStatus(data.uid, adminLibraryTypes.adminLibraryItemStatusType.ACCEPTED)}>
              Accept
            </span>
            <span onClick={() => setStatus(data.uid, adminLibraryTypes.adminLibraryItemStatusType.DECLINED)}>
              Reject
            </span>
            <span onClick={() => deleteItem(data.uid)}>Delete</span>
          </div>
        </div>
      </div>
      <div className="LibraryListItem__column">{data.name}</div>
      <div className="LibraryListItem__column">{data.description}</div>
      <div className="LibraryListItem__column">{data.micheline}</div>
      <div className="LibraryListItem__column">{data.michelson}</div>
    </div>
  );
};

export default LibraryListItem;
