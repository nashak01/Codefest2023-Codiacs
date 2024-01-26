import React from "react";
import CloseButton from "react-bootstrap/CloseButton";
import "./ModalContent.css";

export interface ModalContentProps {
  heading: string;
  subheading?: string;
  children: React.ReactNode;
  footer: React.ReactNode;
  noClose?: true | undefined;
  onClose?: Function;
}

function ModalContent({
  heading,
  subheading,
  children,
  footer,
  noClose,
  onClose,
}: ModalContentProps) {
  return (
    <div className="modal-content">
      {noClose === undefined && onClose && (
        <CloseButton
          className="close"
          aria-label="Close modal"
          onClick={() => onClose()}
        />
      )}
      <div className="headings">
        <h1>{heading}</h1>
        <h2>{subheading}</h2>
      </div>
      {children}
      <div className="modal-footer">{footer}</div>
    </div>
  );
}

export default ModalContent;
