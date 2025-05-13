import React from "react";

const Label = ({
  textSize = "text-base md:text-xl lg:text-2xl",
  text = "a very long text to test the label in the very very very worst case scenario",
}) => {
  return <div className={`${textSize}`}>{text}</div>;
};

export default Label;
