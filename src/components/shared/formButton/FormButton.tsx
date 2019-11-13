import React from "react";
import "./FormButton.scss";
import { ButtonProps } from './types';

const FormButton = ({ type, label, className, onClick, disabled }: ButtonProps) => (
  <button
    className={`form-button form-button_${type ? type : "submit"} ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
);

export default FormButton;
