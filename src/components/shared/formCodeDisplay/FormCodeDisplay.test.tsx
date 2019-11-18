import React from "react";
import { mount } from "enzyme/build";
import FormCodeDisplay from './FormCodeDisplay';
import { FormCodeDisplayProps } from './types';

const defaultProps: FormCodeDisplayProps = {
    value: 'value',
    type: 'type'
}

describe("FormCodeDisplay", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<FormCodeDisplay {...defaultProps} />)
    });

    it("matches snapshot", () => {
        expect(wrapper.debug()).toMatchSnapshot();
    })
})