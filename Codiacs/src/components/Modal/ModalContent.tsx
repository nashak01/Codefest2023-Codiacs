import React from "react";
import "./ModalContent.css";
import Button from "../Button/Button.tsx";

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
        <Button
          className="close"
          aria-label="Close modal"
          children="Close"
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
