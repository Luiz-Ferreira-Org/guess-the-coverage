import React from "react";
import { render, screen } from "@testing-library/react";
import SomeComponent from "./SomeComponent";

describe("SomeComponent", () => {
  // Test if the component renders correctly
  it("renders the component", () => {
    render(<SomeComponent />);
    expect(screen.getByText("SomeComponent")).toBeInTheDocument();
  });
});
