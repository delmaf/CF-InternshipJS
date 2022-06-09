import React from "react";

const InputField = ({ className, text, type, name, handleInput, value }) => {
  return (
    <div className={className}>
      <input
        className="w-full px-4 py-4 mt-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
        type={type}
        placeholder={text}
        name={name}
        onChange={handleInput}
        value={value}
      />
    </div>
  );
};

export default InputField;
