import React from "react";

const GenericButton = ({
  buttonText = "Button Text",
  functionality,
  bgColor = "bg-[#D2D0A0] hover:bg-[#C2C0A0]",
  textColor = "Black",
  textSize = "text-base md:text-lg",
  buttonSize = "md:px-12 py-2 px-4",
}) => {
  function defaultButtonHandling() {
    alert("This button has no functionality added yet");
  }
  return (
    <button
      className={`${bgColor} ${textColor} ${buttonSize} ${textSize} flex flex-row justify-center items-center rounded-lg shadow-md hover:cursor-pointer duration-200 ease-in-out transform`}
      onClick={functionality || defaultButtonHandling}
    >
      {buttonText}
    </button>
  );
};

export default GenericButton;
