import { React, useState, useEffect } from "react";
import i18next from "i18next";
import isEmpty from "lodash/isEmpty";
import { withNamespaces } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../img/Logo.svg";
import DropDown from "../DropDown";
import ImageElement from "../../elements/ImageElement/ImageElement";
import Language from "../../elements/Language";
import Menu from "../Menu/Menu";
import { getPartners } from "../../Redux/actions/getPartners.action";
import { getContacts } from "../../Redux/actions/getContacts.action";

export const Header = ({ t }) => {
  const dispatch = useDispatch();
  const lang = i18next.language;
  const [contactData, setContactData] = useState({
    currentCity: "Chisinau",
    filteredCities: [],
    titleContacts: [],
  });

  useEffect(() => {
    dispatch(getContacts("http://localhost:8081/api/contacts"));
    dispatch(getPartners("http://localhost:8081/api/partners"));
  }, []);

  const partners = useSelector((state) => state.partners.partners);
  const contacts = useSelector((state) => state.contacts.contacts);

  const changeContacts = (contact) =>
    setContactData({ ...contactData, currentCity: contact.city });

  useEffect(() => {
    if (!isEmpty(contacts)) {
      const cities = contacts.filter(
        (el) => el.city !== contactData.currentCity
      );
      const titleNumber = contacts.find(
        (el) => el.city === contactData.currentCity
      );

      setContactData({
        ...contactData,
        filteredCities: cities,
        titleContacts: titleNumber,
      });
    }
  }, [contacts, JSON.stringify(contactData)]);

  const renderContacts = (contactInfo) => {
    return contactInfo.map((contact) => (
      <li
        key={contact._id.toString()}
        onClick={() => changeContacts(contact)}
        className="mb-1 pl-2 flex justify-between"
      >
        <span className="inline-block w-3/6">{t(contact.city)}</span>
        <span className="tel w-3/6 text-lg">{contact.phoneNumber}</span>
      </li>
    ));
  };

  return (
    <div className="bg-black/75 z-10  h-44 sticky top-0 left-0 right-0">
      <div className="container h-44 w-[90%] mx-auto flex ">
        <div className="w-1/5 ml-5 pt-2.5">
          <Link to={`/${lang}`}>
            <ImageElement src={Logo} className="h-28 w-40 pl-1 mt-6" />
          </Link>
        </div>

        <div className="flex flex-wrap  w-4/5">
          <div className="flex justify-between mt-5 w-4/5 h-1/5 text-white">
            <DropDown
              listOfItems={renderContacts(contactData.filteredCities)}
              title={`${contactData.currentCity}: `}
              additionalTitle={contactData.titleContacts.phoneNumber}
              stylesDropdownBtn="w-[230px] pr-10 hover:text-yellow"
            />
            {!partners.length ? (
              <h2>loading...</h2>
            ) : (
              <div className="h-12 w-6/12 py-0 text-center">
                <ImageElement
                  src={partners[0].imgUrl}
                  className="w-24 h-8 inline"
                />
                <ImageElement
                  src={partners[1].imgUrl}
                  className="w-16 h-8 inline ml-2.5"
                />
                <ImageElement
                  src={partners[2].imgUrl}
                  className="w-16 h-8 inline ml-5"
                />
              </div>
            )}
            <Language />
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(Header);
