import React from 'react';
import { mount } from 'enzyme';
import FormTextarea from './FormTextarea';
import { FormTextareaProps } from './types';

const defaultProps: FormTextareaProps = {
    label: 'label',
    name: 'name',
    placeholder: 'placeholder',
    onChange: () => { },
    onBlur: () => { },
    value: 'value',
    errors: null,
    touched: false,
    className: '',
};

describe("FormTextarea", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<FormTextarea {...defaultProps} />)
    });

    it("matches snapshot", () => {
        expect(wrapper.debug()).toMatchSnapshot();
    });
});