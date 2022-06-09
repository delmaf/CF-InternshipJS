import React from "react";

export const ImageElement = (props) => {
  const { src, alt, className } = props;
  return <img src={src} alt={alt} className={className} {...props} />;
};

export default ImageElement;
