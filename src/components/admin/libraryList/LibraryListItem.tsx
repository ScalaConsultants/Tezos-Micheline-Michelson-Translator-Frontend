import React, { useState } from "react";
import "./LibraryListItem.scss";
import { useDispatch } from "redux-react-hook";
import * as adminLibraryTypes from "../../../store/adminLibrary/types";
import * as adminLibraryActions from "../../../store/adminLibrary/actions";
import Confirmation from "./Confirmation";
import Details from "./Details";
import {bindActionCreators} from "redux";

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
  const [selectedDetail, setSelectedDetail] = useState("");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const boundAdminLibraryActions = bindActionCreators(adminLibraryActions, dispatch);

  const setStatus = (item: string, status: adminLibraryTypes.adminLibraryItemStatusType) => {
    boundAdminLibraryActions.LibrarySetStatus(item, status);
    setShowConfirmationModal(false);
  };

  const deleteItem = (item: string) => {
    boundAdminLibraryActions.LibraryDelete(item);
    setShowConfirmationModal(false);
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
        reject: () => setShowConfirmationModal(false),
        action,
      };
    });

    setShowConfirmationModal(true);
  };

  const setDetailModalData = (data: string) => {
    setSelectedDetail(data);
    setShowDetailsModal(true);
  };

  return (
    <div className="LibraryListItem">
      <div className="LibraryListItem__column">
        <div className="LibraryListItem__basic-data">
          <div>{no}</div>
          <div>{data.author}</div>
          <div>{data.email}</div>
          <div>{data.status}</div>
          <div className="Basic-data__button-container">
            <button
              className="Button-container__button--accept"
              onClick={() =>
                setModalData(
                  data.uid,
                  adminLibraryTypes.adminLibraryItemRequestType.PUT,
                  adminLibraryTypes.adminLibraryItemStatusType.ACCEPTED,
                )
              }
            >
              Accept
            </button>
            <button
              className="Button-container__button--decline"
              onClick={() =>
                setModalData(
                  data.uid,
                  adminLibraryTypes.adminLibraryItemRequestType.PUT,
                  adminLibraryTypes.adminLibraryItemStatusType.DECLINED,
                )
              }
            >
              Decline
            </button>
            <button
              className="Button-container__button--delete"
              onClick={() =>
                setModalData(
                  data.uid,
                  adminLibraryTypes.adminLibraryItemRequestType.DELETE,
                  adminLibraryTypes.adminLibraryItemStatusType.REMOVED,
                )
              }
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="LibraryListItem__column">{data.title}</div>
      <div
        className="LibraryListItem__column LibraryListItem__clickable"
        onClick={() => setDetailModalData(data.description)}
      >
        {data.description}
      </div>
      <div
        className="LibraryListItem__column LibraryListItem__clickable"
        onClick={() => setDetailModalData(data.micheline)}
      >
        {data.micheline}
      </div>
      <div
        className="LibraryListItem__column LibraryListItem__clickable"
        onClick={() => setDetailModalData(data.michelson)}
      >
        {data.michelson}
      </div>
      <Confirmation
        showModal={showConfirmationModal}
        name={data.title}
        action={selectedAction.action}
        onAccept={selectedAction.accept}
        onReject={selectedAction.reject}
      />
      <Details showModal={showDetailsModal} data={selectedDetail} onClose={setShowDetailsModal} />
    </div>
  );
};

export default LibraryListItem;
