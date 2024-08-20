import { render, screen } from "@testing-library/react";
import App from "./App";

test("should have one input box", () => {
  render(<App />);
  const inputEl = screen.getByRole("textbox");
  expect(inputEl).toBeInTheDocument();
});

test("should have one button to trigger calculation", () => {
  render(<App />);
  const buttonEl = screen.getByText("Calculate");
  expect(buttonEl).toBeInTheDocument();
});
