import React from "react";
import "./Confirmation.scss";
import FormButton from "../../shared/formButton/FormButton";
import AppModal from "../../shared/modal/AppModal";

type Props = {
  showModal: boolean;
  name: string;
  action: string;
  onAccept: Function;
  onReject: Function;
};

const Confirmation = ({ showModal, name, action, onAccept, onReject }: Props) => {
  return (
    <AppModal showModal={showModal} setShowModal={() => {}}>
      <div className="Confirmation">
        <div>Are you sure you want to &quot;{action}&quot; ?</div>
        <div>This item:</div>
        <div>{name}</div>
        <div>
          <span onClick={() => onAccept()}>
            <FormButton type="submit" label="OK" />
          </span>
          <span onClick={() => onReject()}>
            <FormButton type="button" stylingType="secondary" label="Cancel" />
          </span>
        </div>
      </div>
    </AppModal>
  );
};

export default Confirmation;
