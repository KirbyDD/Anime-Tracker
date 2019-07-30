import React from "react";
import { shallow } from "enzyme";
import { ErrorComponent } from "./ErrorComponent";

describe("Error Component", () => {
  let wrapper;

  beforeEach(function() {
    wrapper = shallow(<ErrorComponent />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
