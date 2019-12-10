import React from "react";
import { mount } from "enzyme";
import ContactInfo from './ContactInfo';

describe("ContactInfo", () => {
    const wrapper = mount(<ContactInfo />);

    it("matches snapshot", () => {
        expect(wrapper.debug()).toMatchSnapshot();
    });

    it("renders without crashing", () => {
        const item = wrapper.find(ContactInfo);

        expect(
            item
                .at(0)
                .find(".contact-info_contact-label")
                .at(0)
                .text()
        ).toEqual("Email us")
    });
});