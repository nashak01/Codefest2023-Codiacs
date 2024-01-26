import { render, screen } from "@testing-library/react";
import ProgressBar from "../../volcano-app/ProgressBar";

const ProgressBarCreator = (props) => <ProgressBar {...props} />;

describe("Progress bar", () => {
  it("renders progress bar container", () => {
    render(ProgressBarCreator({ progress: 50 }));
    expect(screen.getByTestId("progress").toBeTruthy);
  });

  it("renders progress indicator", () => {
    render(ProgressBarCreator({ progress: 50 }));
    expect(screen.getByRole("progress-bar").toBeTruthy);
  });

  it("has success status for progress under 30%", () => {
    const { rerender } = render(ProgressBarCreator({ progress: 25 }));
    expect(screen.getByRole("progress-bar")).not.toHaveClass("bg-success");

    rerender(ProgressBarCreator({ progress: 25 }));
    expect(screen.getByRole("progress-bar")).toHaveClass("bg-success");
  });

  it("has warning status for progress between 30% and 75%", () => {
    const { rerender } = render(ProgressBarCreator({ progress: 50 }));
    expect(screen.getByRole("progress-bar")).not.toHaveClass("bg-warning");

    rerender(ProgressBarCreator({ progress: 50 }));
    expect(screen.getByRole("progress-bar")).toHaveClass("bg-warning");
  });

  it("has danger status for progress over 75%", () => {
    const { rerender } = render(ProgressBarCreator({ progress: 90 }));
    expect(screen.getByRole("progress-bar")).not.toHaveClass("bg-danger");

    rerender(ProgressBarCreator({ progress: 90 }));
    expect(screen.getByRole("progress-bar")).toHaveClass("bg-danger");
  });

  it("has width equal to progress input", () => {
    render(ProgressBarCreator({ progress: 50 }));
    expect(screen.getByRole("progress-bar")).toHaveStyle({ width: "50%" });
  });
});
