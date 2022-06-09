import React from "react";

export const ListElement = ({ items, className, title }) => {
  return (
    <div>
      {!title ? (
        <ul className={className}>
          {items.map((item, i) => (
            <li key={i} className="mr-10">
              {item.title}
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          <li className={className}>{title}</li>
          {items.map((item) => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListElement;
