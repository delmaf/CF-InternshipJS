import { React, useState } from "react";
import info from "../../../src/img/info.svg";
import shop from "../../../src/img/shop.svg";
import ImageElement from "../../elements/ImageElement/ImageElement";
import PortalModal from "../../elements/Portal/Portal";

let result = [];

const Product = ({ prod }) => {
  const [prods, setProds] = useState([]);
  const [openp, setOpenP] = useState(false);
  result = prod.items.map((item, index) => {
    return (
      <div key={index} className=" flex text-white ">
        <div className="w-56 rounded-lg  border-2 border-[#1a191a] duration-500 p-3 hover:border-solid hover:border-yellow-500">
          <div
            onClick={function () {
              setProds(item.name);
              setOpenP(true);
            }}
          >
            <ImageElement className="rounded-lg " src={item.urlImg} />
          </div>
          <div className="flex justify-between py-3 px-2">
            {item.name}
            <ImageElement src={info} />
          </div>
          <div className="hover:bg-yellow-500 duration-500 flex items-center justify-between text-[11px] border p-2 border-yellow-500 rounded-lg">
            {item.price}.00 {item.currency}
            <span className="text-sm flex items-center font-bold">
              În coș
              <ImageElement className="ml-2" src={shop} />
            </span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="flex m-auto justify-center">{result}</div>
      <PortalModal
        className="overlay z-40 fixed top-1/2 h-20  text-white p-4 bg-black/70 rounded"
        message={prods}
        isOpen={openp}
        onClose={() => setOpenP(false)}
      />
    </>
  );
};
export default Product;
