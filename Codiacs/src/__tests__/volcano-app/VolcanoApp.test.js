import { render, screen, fireEvent } from "@testing-library/react";
import VolcanoApp from "../../volcano-app/VolcanoApp.js";

describe("Volcano app page", () => {
  it("renders a textbox for adding emotions", () => {
    render(<VolcanoApp />);
    expect(screen.getByRole("textbox").toBeTruthy);
  });

  it("renders text label for adding emotions", () => {
    render(<VolcanoApp />);
    expect(screen.getByText("Add your own emotions!").toBeTruthy);
  });

  it("renders button for adding emotions", () => {
    render(<VolcanoApp />);
    expect(screen.getByText("Add emotion").toBeTruthy);
  });

  it("adds custom emotion to list when add emotion button pressed", () => {
    render(<VolcanoApp />);

    const textbox = screen.getByRole("textbox");
    fireEvent.change(textbox, { target: { value: "Custom emotion" } });

    const button = screen.getByText("Add emotion");
    fireEvent.click(button);

    expect(screen.getByText("Custom emotion").toBeTruthy);
  });
});
