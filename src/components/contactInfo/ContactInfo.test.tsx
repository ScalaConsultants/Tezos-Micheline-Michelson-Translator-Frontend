import React from "react";
import { mount } from "enzyme/build";
import ContactInfo from './ContactInfo';

describe("ContactInfo", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<ContactInfo />);
    });

    it("matches snapshot", () => {
        expect(wrapper.debug()).toMatchSnapshot();
    });
});