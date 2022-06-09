import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from "lodash/isEmpty";
import { Link } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import i18next from "i18next";
import ListElement from "../../elements/ListElement/ListElement";
import Login from "../LoginIcon";
import Cart from "../Cart";
import DropDown from "../DropDown";
import { getHeaderItems } from "../../Redux/actions/getHeaderItems.action";

export const Menu = ({ t }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [itemWithSubMenu, setItemWithSubMenu] = useState({});
  const [isDataReady, setIsDataReady] = useState(false);
  const lang = i18next.language;
  const dispatch = useDispatch();

  const data = useSelector((state) => state.headerItems.headerItems);

  useEffect(() => {
    dispatch(getHeaderItems("http://localhost:8081/api/nav"));
  }, []);

  useEffect(() => {
    if (!isEmpty(data)) {
      setFilteredData(data.filter((el) => el.title !== "Menu"));
      setItemWithSubMenu(data.find((el) => el.title === "Menu"));
    }
  }, [data]);

  useEffect(() => {
    if (!isEmpty(filteredData) && !isEmpty(itemWithSubMenu)) {
      setIsDataReady(true);
    }
  }, [filteredData, itemWithSubMenu]);

  const renderMenuList = (items) => {
    return items.map((item) => (
      <li className="mb-1 pl-2 flex justify-between " key={item._id}>
        <Link to={`/${lang}/menu/${item.title}`}>
          <span className="inline-block w-4/6 ">{t(item.title)}</span>
        </Link>
      </li>
    ));
  };

  return (
    <div className="flex justify-between mt-5 w-4/5 h-1/5 ">
      <div className="flex w-2/5 ">
        {isDataReady && (
          <DropDown
            listOfItems={renderMenuList(itemWithSubMenu.subMenu)}
            title={t(itemWithSubMenu.title)}
            stylesDropdownContent="menuArrowDropdown"
            stylesDropdownBtn="w-auto "
          >
            <Link to={`/${lang}/menu`}>{itemWithSubMenu.title}</Link>
          </DropDown>
        )}

        {isDataReady && (
          <ListElement items={filteredData} className="text-neutral-400 flex" />
        )}
      </div>
      <div className="flex gap-8 pr-2">
        <Login />
        <Cart />
      </div>
    </div>
  );
};

export default withNamespaces()(Menu);
