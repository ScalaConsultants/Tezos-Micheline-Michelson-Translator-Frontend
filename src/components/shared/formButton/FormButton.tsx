import React from 'react';
import './FormButton.scss';

const FormButton = ({
    type,
    label,
    className,
    onClick,
    disabled,
}: any) => (
        <button
            className={`form-button form-button_${type ? type : 'submit'} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );

export default FormButton;