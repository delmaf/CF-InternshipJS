import React from "react";
import ReactDOM from "react-dom";

const PortalModal = ({ message, isOpen, onClose, className, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className={className}>
      <h2>{message}</h2>
      {children}
      <button onClick={onClose} className="text-red-600 text-xl">
        {"<-X->"}
      </button>
    </div>,
    document.getElementById("portal")
  );
};

export default PortalModal;
