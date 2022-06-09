import React from "react";
import { Link } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import i18next from "i18next";

const ProdTitle = ({ data, t }) => {
  const lang = i18next.language;

  return (
    <>
      <div className="prod_container py-12  bg-[#1a191a] ">
        <div className="title flex px-40 pb-5 justify-between ">
          <span className="text-white text-2xl ">{t(data)} </span>
          <Link className="text-white pr-10" to={`/${lang}/menu/${data}`}>
            {t("GO_TO_MENU")} {t(data)}
          </Link>
        </div>
        <div className="w-full border-t border-gray-800"></div>
      </div>
    </>
  );
};

export default withNamespaces()(ProdTitle);
