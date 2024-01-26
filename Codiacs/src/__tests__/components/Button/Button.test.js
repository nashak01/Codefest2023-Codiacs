import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../../components/Button/Button.tsx";

describe("Button component", () => {
  it("renders a button", () => {
    render(<Button />);
    expect(screen.getByRole("button").toBeTruthy);
  });

  it("runs the onClick function once when button is clicked", () => {
    const mockClick = jest.fn();
    render(<Button onClick={mockClick} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockClick.mock.calls).toHaveLength(1);
  });

  it("renders a button with media if media prop defined", () => {
    const { container } = render(<Button media="&#10004" />);
    expect(container.firstChild.classList.contains("media-span")).toBeTruthy;
  });

  it("renders a button with text equal to input", () => {
    render(<Button>Button Text</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Button Text");
  });

  it("renders a button with the 'light' css class when light prop passed in", () => {
    const { container } = render(<Button light />);
    expect(container.firstChild.classList.contains("light")).toBeTruthy;
  });
});
