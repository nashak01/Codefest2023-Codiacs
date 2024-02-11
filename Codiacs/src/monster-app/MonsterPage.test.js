import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import MonsterPage from "./MonsterPage";

describe("MonsterPage", () => {
  test("renders name input and submit button when nameSubmitted is false", () => {
    const { getByPlaceholderText, getByText } = render(<MonsterPage />);

    const nameInput = getByPlaceholderText("Enter name");
    const submitButton = getByText("Submit");
    fireEvent.mouseEnter(submitButton);
    fireEvent.mouseLeave(submitButton);

    expect(nameInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("renders drawing canvas when name is submitted", () => {
    const { getByPlaceholderText, getByTestId, getByText } = render(
      <MonsterPage />
    );

    const nameInput = getByPlaceholderText("Enter name");
    const submitButton = getByText("Submit");

    fireEvent.change(nameInput, { target: { value: "Worry Monster" } });
    fireEvent.mouseEnter(submitButton);
    fireEvent.mouseLeave(submitButton);
    fireEvent.click(submitButton);

    const canvas = getByTestId("monster-canvas");

    expect(canvas).toBeInTheDocument();
  });

  test("allows user to enter text in text area", () => {
    const { getByLabelText, getByPlaceholderText, getByText } = render(
      <MonsterPage />
    );

    const nameInput = getByPlaceholderText("Enter name");
    const submitButton = getByText("Submit");

    fireEvent.change(nameInput, { target: { value: "Worry Monster" } });
    fireEvent.click(submitButton);

    const textCheckbox = getByLabelText("Text");

    fireEvent.click(textCheckbox);

    const textArea = getByPlaceholderText("Enter your worry here");

    fireEvent.change(textArea, { target: { value: "Test worry" } });

    expect(textArea.value).toBe("Test worry");
  });

  test("clicking button sets isDraggable to true", () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <MonsterPage />
    );

    const nameInput = getByPlaceholderText("Enter name");
    const submitButton = getByText("Submit");

    fireEvent.change(nameInput, { target: { value: "Worry Monster" } });
    fireEvent.click(submitButton);

    const button = getByText(/Click here when you're ready to feed/);
    const canvas = getByTestId("monster-canvas");
    const image = getByTestId("monster-hungry-img");

    fireEvent.mouseEnter(button);
    fireEvent.mouseLeave(button);
    fireEvent.click(button);

    expect(button).toHaveAttribute("disabled");

    // Simulate drag start
    fireEvent.dragStart(canvas);
    // Simulate drop
    fireEvent.drop(image);

    setTimeout(() => {
      expect(button).not.toHaveAttribute("disabled");
    }, 5000);
  });

  test("allows user to toggle drawing checkbox", () => {
    const { getByLabelText, getByPlaceholderText, getByText } = render(
      <MonsterPage />
    );

    const nameInput = getByPlaceholderText("Enter name");
    const submitButton = getByText("Submit");

    fireEvent.change(nameInput, { target: { value: "Worry Monster" } });
    fireEvent.click(submitButton);

    const drawCheckbox = getByLabelText("Draw");

    fireEvent.click(drawCheckbox);

    expect(drawCheckbox).not.toBeChecked();
  });

  test("allows user to toggle text checkbox", () => {
    const { getByLabelText, getByPlaceholderText, getByText } = render(
      <MonsterPage />
    );

    const nameInput = getByPlaceholderText("Enter name");
    const submitButton = getByText("Submit");

    fireEvent.change(nameInput, { target: { value: "Worry Monster" } });
    fireEvent.click(submitButton);

    const textCheckbox = getByLabelText("Text");

    fireEvent.click(textCheckbox);

    expect(textCheckbox).toBeChecked();
  });

  test("renders color picker and line width range when drawing checkbox is checked", () => {
    const { getByLabelText, getByPlaceholderText, getByText, getByTestId } =
      render(<MonsterPage />);

    const nameInput = getByPlaceholderText("Enter name");
    const submitButton = getByText("Submit");

    fireEvent.change(nameInput, { target: { value: "Worry Monster" } });
    fireEvent.click(submitButton);

    const colorPicker = getByTestId("color-picker");
    const lineWidthRange = getByLabelText("1");

    expect(colorPicker).toBeInTheDocument();
    expect(lineWidthRange).toBeInTheDocument();
  });

  test("disables button if monsters name is not entered", () => {
    const { getByPlaceholderText, getByText } = render(<MonsterPage />);
    const nameInput = getByPlaceholderText("Enter name");
    const submitButton = getByText("Submit");

    fireEvent.change(nameInput, { target: { value: "" } });

    expect(submitButton).toBeDisabled();
  });

  test("allows user to submit name and renders monster name after submission", () => {
    const { getByPlaceholderText, getByText } = render(<MonsterPage />);
    const nameInput = getByPlaceholderText("Enter name");
    const submitButton = getByText("Submit");

    fireEvent.change(nameInput, { target: { value: "Mr Silly Monster" } });
    fireEvent.click(submitButton);

    expect(getByText("Mr Silly Monster")).toBeInTheDocument();
  });

  // Add more tests as needed to cover all functionalities
});
