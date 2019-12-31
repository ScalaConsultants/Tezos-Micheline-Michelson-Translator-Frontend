import React from "react";
import { mount, shallow } from "enzyme";
import FormInput from "./FormInput";
import { FormInputProps } from "./types";

const defaultProps: FormInputProps = {
  label: "test label",
  name: "name",
  type: "text",
  onChange: () => {},
  onBlur: () => {},
  value: "value",
  errors: undefined,
  touched: false,
  className: "",
};

describe("FormInput", () => {
  const wrapper = mount(<FormInput {...defaultProps} />);

  it("matches snapshot", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("renders without crasihng", () => {
    const item = wrapper.find(FormInput);

    expect(
      item
        .at(0)
        .find(".form-input_label")
        .at(0)
        .text(),
    ).toEqual("test label");
  });
});
