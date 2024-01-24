import React from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent.tsx";
import "./Modal.css";

export interface ModalComponentProps {
  heading: React.ReactNode;
  children: React.ReactNode;
  noClose?: true | undefined;
  onClose: Function;
}

function Modal({ heading, children, noClose, onClose }: ModalComponentProps) {
  return (
    <div className="modal-overlay">
      {createPortal(
        <ModalContent heading={heading} noClose={noClose} onClose={onClose}>
          {children}
        </ModalContent>,
        document.body
      )}
    </div>
  );
}

export default Modal;
