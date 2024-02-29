import React from "react";
import CloseButton from "react-bootstrap/CloseButton";
import "./ModalContent.css";

export interface ModalContentProps {
  heading: string;
  children: React.ReactNode;
  footer: React.ReactNode;
  noClose?: true | undefined;
  onClose?: Function;
}

function ModalContent({
  heading,
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
      <h1>{heading}</h1>
      {children}
      <div className="modal-footer">{footer}</div>
    </div>
  );
}

export default ModalContent;