import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UnusedEmotions from "../../volcano-app/UnusedEmotions.js";

const emotions = ["happy", "sad"];

describe("Unused emotions", () => {
  it("should mark all emotions as draggable", () => {
    render(<UnusedEmotions emotions={emotions} />);
    expect(screen.getByText("happy")).toHaveAttribute("draggable", "true");
  });

  it("should set the emotion data when dragged", () => {
    render(<UnusedEmotions emotions={emotions} />);

    const emotion = screen.getByText("happy");
    const mockSetData = jest.fn();
    fireEvent.dragStart(emotion, { dataTransfer: { setData: mockSetData } });

    expect(mockSetData).toHaveBeenCalledTimes(1);
  });
});
