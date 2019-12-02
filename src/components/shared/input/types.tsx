export type FormInputProps = {
    label: string,
    name: string,
    type: string,
    onChange: any,
    onBlur: any,
    value: string,
    errors?: string,
    touched?: boolean,
    className?: string,
    isValidationDisplay?: boolean,
    disabled?: boolean,
};