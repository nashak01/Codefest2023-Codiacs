import { render } from "@testing-library/react";
import Modal from "../../../components/Modal/Modal.tsx";

describe("Modal", () => {
  it("renders modal overlay", () => {
    const { container } = render(<Modal />);
    expect(container.firstChild.classList.contains("modal-overlay"));
  });

  it("renders modal content", () => {
    const { getByText } = render(<Modal heading="Modal Heading" />);
    expect(getByText("Modal Heading")).toBeInTheDocument;
  });
});
