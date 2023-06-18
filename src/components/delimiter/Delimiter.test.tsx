import React from "react";
import renderer from "react-test-renderer";
import Delimiter from "./Delimiter";


describe("Delimiter", () => {
  it("Should render component", () => {
    // Render the Delimiter component
    const tree = renderer.create(<Delimiter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
