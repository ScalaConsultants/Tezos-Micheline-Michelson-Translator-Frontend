import React from 'react';
import FormButton from './FormButton';
import { shallow } from 'enzyme';
import { ButtonProps } from './types';

const defaultProps: ButtonProps = {
    type: 'submit',
    label: '',
    className: '',
    onClick: '',
    disabled: false,
}

describe("Form Button", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<FormButton {...defaultProps} />)
    });

    it('matches snapshot', () => {
        expect(wrapper.debug()).toMatchSnapshot();
    })
});
