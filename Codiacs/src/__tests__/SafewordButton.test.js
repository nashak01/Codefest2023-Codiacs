import { render, screen, fireEvent } from "@testing-library/react";
import SafewordButton from "../safe-word/SafewordButton";

describe("Safeword button", () => {
  it("renders a button", () => {
    render(<SafewordButton />);
    expect(screen.getByRole("button").toBeTruthy);
  });

  it("displays alert when button clicked", () => {
    global.alert = jest.fn();

    render(<SafewordButton />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(global.alert).toHaveBeenCalledTimes(1);
  });
});
