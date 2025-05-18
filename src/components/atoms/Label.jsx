import React from "react";

const Label = ({
  htmlFor,
  textSize = "text-base md:text-xl lg:text-2xl",
  text = "a very long text to test the label in the very very very worst case scenario",
  className = "",
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`cursor-pointer ${textSize} ${className}`}
    >
      {text}
    </label>
  );
};

export default Label;
