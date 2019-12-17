import React from "react";
import { mount } from "enzyme";
import AppModal from "./AppModal";
import { AppModalProps } from "./types";

const defaultProps: AppModalProps = {
  showModal: true,
  setShowModal: () => {},
  children: <div>children</div>,
};

describe("AppModal", () => {
  const wrapper = mount(<AppModal {...defaultProps} />);

  it("matches snapshot", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const item = wrapper.find(AppModal);

    expect(
      item
        .at(0)
        .find(".app-modal_children")
        .at(0)
        .children()
        .at(0)
        .html(),
    ).toEqual("<div>children</div>");
  });
});
