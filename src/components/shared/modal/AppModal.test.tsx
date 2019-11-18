import React from 'react';
import { mount } from 'enzyme';
import AppModal from './AppModal';
import { AppModalProps } from './types';

const defaultProps: AppModalProps = {
    showModal: true,
    setShowModal: () => { },
    children: <div>children</div>,
};

describe("AppModal", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<AppModal {...defaultProps} />)
    });

    it("matches snapshot", () => {
        expect(wrapper.debug()).toMatchSnapshot();
    });
});