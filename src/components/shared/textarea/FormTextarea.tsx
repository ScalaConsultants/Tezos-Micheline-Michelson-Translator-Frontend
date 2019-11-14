import React from "react";
import "./FormTextarea.scss";
import { FormInputProps } from "./types";

const FormTextarea = ({
  label,
  placeholder,
  name,
  onChange,
  onBlur,
  value,
  errors,
  touched,
  className,
}: FormInputProps) => (
  <div className={`form-textarea ${className}`}>
    <div className="form-textarea_label">{label}</div>
    <textarea
      className="form-textarea_input"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
    <div className="form-textarea_error">{errors && touched && errors}</div>
  </div>
);

export default FormTextarea;
