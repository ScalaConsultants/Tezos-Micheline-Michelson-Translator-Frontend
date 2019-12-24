import React from "react";
import addImg from "./add-btn.svg";
import "./AddIconButton.scss";
import { AddIconButtonProps } from "./types";

const AddIconButton = ({ type, disabled, onClick }: AddIconButtonProps) => (
  <button
    className="AddIconButton"
    disabled={disabled ? disabled : false}
    type={type}
    onClick={onClick}
  >
    <img src={addImg} alt="" />
  </button>
);

export default AddIconButton;
