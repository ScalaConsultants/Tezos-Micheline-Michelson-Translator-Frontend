import React from "react";
import "./FormButton.scss";
import { ButtonProps } from "./types";

const FormButton = ({ type, label, className, disabled }: ButtonProps) => (
  <button
    className={`form-button form-button_${type || "submit"} ${className}`}
    data-testid="form-button"
    disabled={disabled}
    type="submit"
  >
    {label}
  </button>
);

export default FormButton;
