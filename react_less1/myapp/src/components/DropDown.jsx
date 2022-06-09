import { React, useState } from "react";

export const DropDown = (props) => {
  const [style, setStyle] = useState({ display: "none" });
  const {
    listOfItems,
    title,
    additionalTitle = "",
    stylesDropdownContent,
    stylesDropdownBtn = "",
  } = props;

  return (
    <div className="dropdown relative inline-block w-3/12 text-neutral-400 text-base text-left">
      <button
        className={`dropbtn h-15 mr-5  ${stylesDropdownBtn}`}
        onMouseEnter={() => {
          setStyle({ display: "block" });
        }}
        onMouseLeave={() => {
          setStyle({ display: "none" });
        }}
      >
        {props.children}
        {additionalTitle && (
          <span className="text-lg ml-2">
            {title} {additionalTitle}
          </span>
        )}
      </button>
      <div
        className={`dropdown-content ${stylesDropdownContent}`}
        onMouseEnter={() => {
          setStyle({ display: "block" });
        }}
        onMouseLeave={() => {
          setStyle({ display: "none" });
        }}
        style={style}
      >
        <button className="text-left bg-[#1a191a] w-80 p-2 rounded-lg z-50 absolute text-neutral-200 ">
          {listOfItems}
        </button>
      </div>
    </div>
  );
};

export default DropDown;
