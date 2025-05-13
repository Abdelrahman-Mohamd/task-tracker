import React from "react";

const Heading = ({
  textSize = "text-2xl md:text-3xl lg:text-4xl",
  headingText = "Very Very Very Long Heading To Test The Worst Case Scenario",
}) => {
  return (
    <h1
      className={`${textSize} text-center mx-10 my-5 font-bold text-[#537D5D]`}
    >
      {headingText}
    </h1>
  );
};

export default Heading;
