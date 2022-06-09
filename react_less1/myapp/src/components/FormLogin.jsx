import React from "react";

const FormLogin = ({ children, titleText, formText }) => (
  <>
    <h1 className="text-2xl text-white font-bold text-center pt-2">
      {titleText}
    </h1>
    <div className="flex items-center justify-center my-10">
      <div className=" w-2/4 px-8 py-10 text-left shadow-lg border-2 border-gray-200 rounded-2xl ">
        <h3 className="text-2xl text-white font-bold text-center">
          {formText}
        </h3>
        <div className="flex justify-center">
          <form className="w-2/3">{children}</form>
        </div>
      </div>
    </div>
  </>
);

export default FormLogin;
