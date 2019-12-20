import React, { useState } from "react";
import "./LibraryListItem.scss";
import { useDispatch } from "redux-react-hook";
import * as adminLibraryTypes from "../../../store/adminLibrary/types";
import AppModal from "../../shared/modal/AppModal";
import Confirmation from "./Confirmation";

type Props = {
  data: adminLibraryTypes.AdminLibraryItem;
  no: number;
};

type SelectedActionType = {
  accept: Function;
  reject: Function;
  action: string;
};

const LibraryListItem = ({ data, no }: Props) => {
  const dispatch = useDispatch();
  const [selectedAction, setSelectedAction] = useState<SelectedActionType>({
    accept: () => {},
    reject: () => {},
    action: "",
  });
  const [showModal, setShowModal] = useState(false);

  const setStatus = (item: string, status: adminLibraryTypes.adminLibraryItemStatusType) => {
    dispatch({
      type: adminLibraryTypes.ADMIN_LIBRARY_SET_STATUS,
      item,
      status,
    });

    setShowModal(false);
  };

  const deleteItem = (item: string) => {
    dispatch({
      type: adminLibraryTypes.ADMIN_LIBRARY_DELETE,
      item,
    });

    setShowModal(false);
  };

  const setModalData = (
    item: string,
    requestType: adminLibraryTypes.adminLibraryItemRequestType,
    status: adminLibraryTypes.adminLibraryItemStatusType,
  ) => {
    let accept: Function = () => {};
    let action: string = "";

    if (
      requestType === adminLibraryTypes.adminLibraryItemRequestType.PUT &&
      status === adminLibraryTypes.adminLibraryItemStatusType.ACCEPTED
    ) {
      accept = () => setStatus(item, status);
      action = "accept";
    } else if (
      requestType === adminLibraryTypes.adminLibraryItemRequestType.PUT &&
      status === adminLibraryTypes.adminLibraryItemStatusType.DECLINED
    ) {
      accept = () => setStatus(item, status);
      action = "decline";
    } else if (
      requestType === adminLibraryTypes.adminLibraryItemRequestType.DELETE &&
      status === adminLibraryTypes.adminLibraryItemStatusType.REMOVED
    ) {
      accept = () => deleteItem(item);
      action = "remove";
    }
    setSelectedAction(prevState => {
      return {
        ...prevState,
        accept: () => accept(),
        reject: () => setShowModal(false),
        action,
      };
    });

    setShowModal(true);
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
            <span
              onClick={() =>
                setModalData(
                  data.uid,
                  adminLibraryTypes.adminLibraryItemRequestType.PUT,
                  adminLibraryTypes.adminLibraryItemStatusType.ACCEPTED,
                )
              }
            >
              Accept
            </span>
            <span
              onClick={() =>
                setModalData(
                  data.uid,
                  adminLibraryTypes.adminLibraryItemRequestType.PUT,
                  adminLibraryTypes.adminLibraryItemStatusType.DECLINED,
                )
              }
            >
              Decline
            </span>
            <span
              onClick={() =>
                setModalData(
                  data.uid,
                  adminLibraryTypes.adminLibraryItemRequestType.DELETE,
                  adminLibraryTypes.adminLibraryItemStatusType.REMOVED,
                )
              }
            >
              Delete
            </span>
          </div>
        </div>
      </div>
      <AppModal showModal={showModal} setShowModal={() => {}}>
        <Confirmation
          name={data.name}
          action={selectedAction.action}
          onAccept={selectedAction.accept}
          onReject={selectedAction.reject}
        />
      </AppModal>
      <div className="LibraryListItem__column">{data.name}</div>
      <div className="LibraryListItem__column">{data.description}</div>
      <div className="LibraryListItem__column">{data.micheline}</div>
      <div className="LibraryListItem__column">{data.michelson}</div>
    </div>
  );
};

export default LibraryListItem;
