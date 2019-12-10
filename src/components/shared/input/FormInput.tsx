import React from "react";
import "./FormInput.scss";
import { FormInputProps } from "./types";

const FormInput = ({
  label,
  name,
  type,
  onChange,
  onBlur,
  value,
  errors,
  touched,
  className,
  isValidationDisplay = true,
  disabled,
}: FormInputProps) => (
  <div className={`form-input ${className}`}>
    <p className="form-input_label">{label}</p>
    <input
      name={name}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={label}
      value={value}
      test-id="input-test"
      className="form-input_input"
      disabled={disabled}
    />
    {isValidationDisplay && (
      <div>
        <div className={`form-input_validation-marker ${touched && !errors && "valid"}`} />
        <div className="form-input_error">{errors && touched && errors}</div>
      </div>
    )}
  </div>
);

export default FormInput;
