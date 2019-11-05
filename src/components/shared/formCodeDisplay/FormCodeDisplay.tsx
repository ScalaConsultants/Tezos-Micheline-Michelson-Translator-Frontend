import React from 'react';
import './FormCodeDisplay.scss'

const FormCodeDisplay = ({
    value,
    type,
}: any) => (
        <div className='form-code-display'>
            <div className='form-code-display_type'>
                {type}
            </div>
            <div className='form-code-display_value'>
                <pre>
                    {value}
                </pre>
            </div>
        </div>
    );

export default FormCodeDisplay;