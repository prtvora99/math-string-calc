import { fireEvent, render, screen } from "@testing-library/react";
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

test("inputVal state is updated on input change", () => {
  render(<App />);
  const inputEl = screen.getByRole("textbox");
  fireEvent.change(inputEl, { target: { value: "1,2,3" } });

  // check if the value is updating correctly
  expect(inputEl.value).toBe("1,2,3");
});

test("should show sum after clicking on button", () => {
  render(<App />);
  const inputEl = screen.getByRole("textbox");
  fireEvent.change(inputEl, { target: { value: "1,2,3" } });

  const buttonEl = screen.getByText("Calculate");
  fireEvent.click(buttonEl);

  const sumText = screen.getByText("Sum is:: 6");
  expect(sumText).toBeInTheDocument();
});
