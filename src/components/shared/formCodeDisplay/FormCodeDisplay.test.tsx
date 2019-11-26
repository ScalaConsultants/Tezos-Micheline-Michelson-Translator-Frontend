import React from "react";
import { mount } from "enzyme";
import FormCodeDisplay from './FormCodeDisplay';
import { FormCodeDisplayProps } from './types';

const defaultProps: FormCodeDisplayProps = {
    value: 'test value',
    type: 'type'
}

describe("FormCodeDisplay", () => {
    const wrapper = mount(<FormCodeDisplay {...defaultProps} />);

    it("matches snapshot", () => {
        expect(wrapper.debug()).toMatchSnapshot();
    });

    it("renders without crashing", () => {
        const item = wrapper.find(FormCodeDisplay);

        expect(
            item
                .at(0)
                .find(".form-code-display_value")
                .at(0)
                .text()
        ).toEqual("test value")
    });
})