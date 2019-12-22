import React from "react";
import "./Confirmation.scss";
import FormButton from "../../shared/formButton/FormButton";
import AppModal from "../../shared/modal/AppModal";

type Props = {
  showModal: boolean;
  data: string;
  onClose: Function;
};

const Details = ({ showModal, data, onClose }: Props) => {
  return (
    <AppModal showModal={showModal} setShowModal={() => {}}>
      <div className="Confirmation">
        <div>{data}</div>
        <span onClick={() => onClose()}>
          <FormButton type="button" stylingType="secondary" label="Close" />
        </span>
      </div>
    </AppModal>
  );
};

export default Details;
