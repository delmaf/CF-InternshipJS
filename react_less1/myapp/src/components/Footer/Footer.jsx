import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withNamespaces } from "react-i18next";
import ListElement from "../../elements/ListElement/ListElement";
import FooterSubscribe from "./FooterSubscribe";
import { getFooterItems } from "../../Redux/actions/getFooterItems.action";

export const Footer = ({ t }) => {
  const footerData = useSelector((state) => state.footerItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFooterItems());
  }, []);

  return (
    <div className="footer">
      <div className="footer-nav justify-center flex bg-[#1a191a] pb-20 pt-20 text-gray-500">
        {footerData.footerItems.map((footerElem, i) => (
          <div
            key={i}
            className="caret-yellow-500 flex ml-16 pr-5 mb-10 mt-10 "
          >
            <ListElement
              items={footerElem.list}
              className="text-yellow-400  pb-5 text-lg"
              title={t(footerElem.title)}
            />
          </div>
        ))}
        <FooterSubscribe />
      </div>
    </div>
  );
};
export default withNamespaces()(Footer);
