import React from "react";
import "./Confirmation.scss";
import FormButton from "../../shared/formButton/FormButton";

type Props = {
  name: string;
  action: string;
  onAccept: Function;
  onReject: Function;
};

const Confirmation = ({ name, action, onAccept, onReject }: Props) => {
  return (
    <div className="Confirmation">
      <div>Are you sure you  want to &quot;{action}&quot; ?</div>
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
  );
};

export default Confirmation;
