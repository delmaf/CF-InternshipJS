import React from "react";
import i18n from "../i18n/i18n";
import { Link, useLocation } from "react-router-dom";

export const Language = () => {
  const locate = useLocation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="languages">
      <div className="text-neutral-400 w-2/12 text-lg"></div>
      <Link to={`/en/${locate.pathname.split("/").splice(2).join("/")}`}>
        <button onClick={() => changeLang("en")}>En </button>
      </Link>

      <Link to={`/ru/${locate.pathname.split("/").splice(2).join("/")}`}>
        <button onClick={() => changeLang("ru")}> &nbsp; Ru</button>
      </Link>
    </div>
  );
};

export default Language;
