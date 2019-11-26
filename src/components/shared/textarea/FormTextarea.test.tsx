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
    value: 'test value',
    errors: undefined,
    touched: false,
    className: '',
};

describe("FormTextarea", () => {
    const wrapper = mount(<FormTextarea {...defaultProps} />);

    it("matches snapshot", () => {
        expect(wrapper.debug()).toMatchSnapshot();
    });

    it("renders without crashing", () => {
        const item = wrapper.find(FormTextarea);

        expect(
            item
                .at(0)
                .find(".form-textarea_input")
                .at(0)
                .text()
        ).toEqual('test value')
    });
});