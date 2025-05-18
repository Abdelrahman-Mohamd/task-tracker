import React from "react";

// Set Poppins as the default font for the app
const CheckBox = ({ id }) => {
  return (
    <input
      id={id}
      type="checkbox"
      className="w-5 h-5 accent-[#9EBC8A] font-poppins hover:cursor-pointer md:w-12 md:h-12"
    />
  );
};

export default CheckBox;
