import { render, screen, fireEvent } from "@testing-library/react";
import UnusedEmojiEmotions from "../../volcano-app/UnusedEmojiEmotions";

const testEmojis = [
  { symbol: "😀", label: "happy" },
  { symbol: "😢", label: "sad" },
  { symbol: "😕", label: "confused" },
];

const testEmojisNoLabels = [
  { symbol: "😀" },
  { symbol: "😢" },
  { symbol: "😕" },
];

describe("Unused emoji list", () => {
  it("renders the emoji list", () => {
    render(<UnusedEmojiEmotions emotions={testEmojis} />);
    expect(screen.getByText("😢")).toBeTruthy;
  });

  it("should have a default aria-label attribute for all emojis", () => {
    const { container } = render(
      <UnusedEmojiEmotions emotions={testEmojisNoLabels} />
    );
    const box = container.firstChild;
    expect(box.firstChild).toHaveAttribute("aria-label", "emoji");
  });

  it("should have a custom aria-label attribute for all emojis", () => {
    const { container } = render(<UnusedEmojiEmotions emotions={testEmojis} />);
    const box = container.firstChild;
    expect(box.firstChild).toHaveAttribute("aria-label", "happy");
  });

  it("should have a 'true' aria-hidden attribute for all emojis without labels", () => {
    const { container } = render(
      <UnusedEmojiEmotions emotions={testEmojisNoLabels} />
    );
    const box = container.firstChild;
    expect(box.firstChild).toHaveAttribute("aria-hidden", "true");
  });

  it("should have a 'false' aria-hidden attribute for all emojis with labels", () => {
    const { container } = render(<UnusedEmojiEmotions emotions={testEmojis} />);
    const box = container.firstChild;
    expect(box.firstChild).toHaveAttribute("aria-hidden", "false");
  });

  //   it("should fire the handleOnDrag event when dragged", () => {
  //     const MockFunc = jest.spyOn(UnusedEmojiEmotions.prototype, "handleOnDrag");

  //     const { container } = render(<UnusedEmojiEmotions emotions={testEmojis} />);
  //     fireEvent.mouseDown(container.firstChild);
  //     fireEvent.mouseMove(container.firstChild, { clientX: 100, clientY: 100 });

  //     expect(MockFunc).toHaveBeenCalled();
  //   });
});
