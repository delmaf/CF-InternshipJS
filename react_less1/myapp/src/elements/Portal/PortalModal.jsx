import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import i18next from "i18next";

const PortalModal = ({ message, isOpen, onClose, className, children }) => {
  const lang = i18next.language;
  // const navigate = useNavigate();

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className={className}>
      <h2>{message}</h2>
      {children}
      <Link to={`/${lang}/`}>
        <button onClick={onClose} className="text-red-600 text-xl">
          {"<-X->"}
        </button>
      </Link>
    </div>,
    document.getElementById("portal")
  );
};

export default PortalModal;
