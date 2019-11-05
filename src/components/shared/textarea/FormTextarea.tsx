import React from 'react';
import './FormTextarea.scss';

const FormTextarea = ({
    label,
    placeholder,
    name,
    type,
    onChange,
    onBlur,
    value,
    errors,
    touched,
    className,
}: any) => (
        <div className={`form-textarea ${className}`}>
            <div className='form-textarea_label'>
                {label}
            </div>
            <textarea
                className='form-textarea_input'
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                onClick={() => console.log(onBlur)}
            />
            <div className="form-textarea_error">
                {errors && touched && errors}
            </div>
        </div>
    );

export default FormTextarea;