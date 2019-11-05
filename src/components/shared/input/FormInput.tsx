import React from 'react';
import './FormInput.scss';

const FormInput = ({ label, name, type, onChange, onBlur, value, errors, touched, className }: any) => (
  <div className={`form-input ${className}`}>
    <p className="form-input_label" onClick={() => console.log(touched)}>
      {label}
    </p>
    <input
      name={name}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={label}
      value={value}
      className="form-input_input"
    />
    <div className={`form-input_validation-marker ${touched && !errors && 'valid'}`}></div>
    <div className="form-input_error">{errors && touched && errors}</div>
  </div>
);

export default FormInput;
