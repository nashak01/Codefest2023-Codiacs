import { render, screen, fireEvent } from "@testing-library/react";
import Textbox from "../../../components/Textbox/Textbox.tsx";

function MockLabelledBy(props) {
  return (
    <>
      <label id="mockLabelledBy">Test label</label>
      <Textbox size={props.size} labelledBy="mockLabelledBy" />
    </>
  );
}

describe("Textbox", () => {
  it("renders a textbox if size is small", () => {
    render(<Textbox size="sm" />);
    expect(screen.getByRole("textbox").toBeTruthy);
  });

  it("renders a textbox if size is large", () => {
    render(<Textbox size="lg" />);
    expect(screen.getByRole("textbox").toBeTruthy);
  });

  it("renders a textarea if size is large", () => {
    render(<Textbox size="lg" />);
    expect(screen.getByRole("textbox")).toHaveClass("textarea");
  });

  it("has only the aria-labelledby property if labelledBy prop is defined, size small", () => {
    render(<MockLabelledBy size="sm" />);
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "aria-labelledby",
      "mockLabelledBy"
    );
    expect(screen.getByRole("textbox")).not.toHaveAttribute("aria-label");
  });

  it("has only the aria-labelledby property if labelledBy prop is defined, size large", () => {
    render(<MockLabelledBy size="lg" />);
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "aria-labelledby",
      "mockLabelledBy"
    );
    expect(screen.getByRole("textbox")).not.toHaveAttribute("aria-label");
  });

  it("has only the aria-label property if labelledBy prop is not defined, size small", () => {
    render(<Textbox size="sm" label="Test label" />);
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "aria-label",
      "Test label"
    );
    expect(screen.getByRole("textbox")).not.toHaveAttribute("aria-labelledby");
  });

  it("has only the aria-label property if labelledBy prop is not defined, size large", () => {
    render(<Textbox size="lg" label="Test label" />);
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "aria-label",
      "Test label"
    );
    expect(screen.getByRole("textbox")).not.toHaveAttribute("aria-labelledby");
  });

  it("renders an empty tag if no size is given", () => {
    const { container } = render(<Textbox />);
    expect(container.firstChild).toBeEmptyDOMElement;
  });

  it("runs the onChange function once when text is changed", () => {
    const mockChange = jest.fn();
    render(<Textbox size="sm" onChange={mockChange} />);

    const textbox = screen.getByRole("textbox");
    fireEvent.change(textbox, { target: { value: "a" } });

    expect(mockChange.mock.calls).toHaveLength(1);
  });
});
