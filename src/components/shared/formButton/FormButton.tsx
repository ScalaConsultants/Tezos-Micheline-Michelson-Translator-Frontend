import React from "react";
import "./FormButton.scss";
import { ButtonProps } from "./types";

const FormButton = ({ type, label, className, disabled, stylingType, onClick}: ButtonProps) => (
  <button
    className={`form-button form-button_${stylingType ? stylingType : "submit"} ${className}`}
    data-testid="form-button"
    disabled={disabled}
    type={type}
    onClick={onClick}
  >
    {label}
  </button>
);

export default FormButton;
