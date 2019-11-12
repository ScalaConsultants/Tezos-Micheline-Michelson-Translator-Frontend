import React from "react";
import "./AddButton.scss";
import addImg from "./add-btn.svg";

type Props = {
  handleClick: Function;
};

const AddButton = ({ handleClick }: Props) => {
  return (
    <div className="AddButton">
      <img src={addImg} alt="" onClick={() => handleClick()} />
    </div>
  );
};

export default AddButton;
