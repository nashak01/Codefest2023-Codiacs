import React from "react";
import CloseButton from "react-bootstrap/CloseButton";
import "./ModalContent.css";

export interface ModalContentProps {
  heading: React.ReactNode;
  children: React.ReactNode;
  noClose?: true | undefined;
  onClose: Function;
}

function ModalContent({
  heading,
  children,
  noClose,
  onClose,
}: ModalContentProps) {
  return (
    <div className="modal-content">
      {noClose === undefined && (
        <CloseButton
          className="close"
          aria-label="Close modal"
          onClick={() => onClose()}
        />
      )}
      <h1>{heading}</h1>
      {children}
    </div>
  );
}

export default ModalContent;
