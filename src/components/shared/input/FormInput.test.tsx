import React from 'react';
import { mount } from 'enzyme';
import FormInput from './FormInput';
import { FormInputProps } from './types';

const defaultProps: FormInputProps = {
    label: 'label',
    name: 'name',
    type: 'text',
    onChange: () => { },
    onBlur: () => { },
    value: 'value',
    errors: undefined,
    touched: false,
    className: '',
}

describe('FormInput', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<FormInput {...defaultProps} />)
    });

    it("matches snapshot", () => {
        expect(wrapper.debug()).toMatchSnapshot();
    });
});