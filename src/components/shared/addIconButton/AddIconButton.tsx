import React from "react";
import "./AddIconButton.scss";
import { AddIconButtonProps } from "./types";

const addImg = require("./add-btn.svg");


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
