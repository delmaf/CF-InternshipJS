import React from "react";
import ImageElement from "../elements/ImageElement/ImageElement";
import cartIco from "../img/cart.svg";

const Cart = (props) => {
  const { className } = props;

  return (
    <div className="pl-7 h-7 flex ">
      <ImageElement src={cartIco} alt="Login" className={className} />
    </div>
  );
};
export default Cart;
