import "@testing-library/jest-dom";

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

// test to check if the Button component is integrated with parent component(App)
describe("App Component", () => {
  it("increments click count when button is clicked", () => {
    const { getByText } = render(<App />);
    const clickButton = getByText("Click me");
    const clickCountText = getByText("Clicked 0 times");

    fireEvent.click(clickButton);
    expect(clickCountText.textContent).toBe("Clicked 1 times");

    fireEvent.click(clickButton);
    expect(clickCountText.textContent).toBe("Clicked 2 times");
  });
});
