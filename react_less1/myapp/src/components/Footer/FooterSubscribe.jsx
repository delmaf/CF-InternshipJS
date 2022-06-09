import React from "react";
import Facebook from "../../../src/img/fb.svg";
import Instagram from "../../../src/img/insta.svg";
import Youtube from "../../../src/img/youtube.svg";
import ImageElement from "../../elements/ImageElement/ImageElement";

export const FooterSubscribe = () => {
  return (
    <div className="ml-40 w-3/12">
      <div className="text-white text-xl">Подписаться на рассылку</div>
      <input className="h-1/5 w-7/12 p-2.5" placeholder="Ваш email" />
      <button className="border-2 rounded-md bg-[#131213] text-white border-[#706f70] w-3/12 h-[50px] ml-1">
        Subscribe
      </button>
      <div className="flex py-7">
        <div className=" mr-10">
          <ImageElement
            src="https://www.andys.md/assets/img/pays.png"
            className="inline"
          />
        </div>
        <div className="flex">
          <ImageElement src={Facebook} className="inline" />
          <ImageElement src={Instagram} className="inline" />
          <ImageElement src={Youtube} className="inline" />
        </div>
      </div>
      <div className="text-[#535353] text-sm">
        <a href="#" className="block">
          Разработка сайта – ilab.md
        </a>
        <a href="#" className="block">
          Дизайн разработан в Midsun.md
        </a>
      </div>
    </div>
  );
};

export default FooterSubscribe;
