import React from 'react';
import './FormInput.scss'

const FormInput = ({
    label,
    name,
    type,
    onChange,
    onBlur,
    value,
    errors,
    touched
}: any) => (
        <div className="form-input">
            <label className="form-input_label">{label}</label>
            <input
                name={name}
                type={type}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                className="form-input_input"
            />
            {errors && touched ? (
                <div className="form-input_error">
                    {errors}
                </div>) : null}
        </div>
    );


export default FormInput;