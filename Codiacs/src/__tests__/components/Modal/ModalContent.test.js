import { render, screen, fireEvent } from "@testing-library/react";
import ModalContent from "../../../components/Modal/ModalContent.tsx";

describe("Modal", () => {
  it("renders modal content", () => {
    const { container } = render(<ModalContent />);
    expect(container.firstChild.classList.contains("modal-content"));
  });

  it("renders modal heading", () => {
    const { getByText } = render(<ModalContent heading="Modal Heading" />);
    expect(getByText("Modal Heading")).toBeInTheDocument;
  });

  it("renders modal footer", () => {
    const { getByText } = render(<ModalContent footer={<p>Modal Footer</p>} />);
    expect(getByText("Modal Footer")).toBeInTheDocument;
  });

  it("renders modal children", () => {
    const { getByText } = render(
      <ModalContent children={<p>Modal Children</p>} />
    );
    expect(getByText("Modal Children")).toBeInTheDocument;
  });

  it("renders a button when noClose is not passed as a prop", () => {
    render(<ModalContent onClose={() => void 0} />);
    expect(screen.getByRole("button")).toBeTruthy;
  });

  it("does not render a button when noClose is passed as a prop", () => {
    render(<ModalContent noClose />);
    expect(screen.queryByRole("button")).toBeFalsy;
  });

  it("runs the onClose function once when close button is clicked", () => {
    const mockClick = jest.fn();
    render(<ModalContent onClose={mockClick} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockClick.mock.calls).toHaveLength(1);
  });
});
