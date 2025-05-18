import React from "react";
import AddIcon from "@mui/icons-material/Add";

const IconButton = ({
  icon = <AddIcon fontSize="small" />,
  bgcolor = "bg-[#537D5D] hover:bg-[#3b5842]",
  ariaLAbel = "Add",
  functionality,
}) => {
  function defaultButtonHandling() {
    alert("This button has no functionality added yet");
  }
  return (
    <button
      className={`flex items-center justify-center w-7 xs:w-8 sm:w-10 md:w-12 h-7 xs:h-8 sm:h-10 md:h-12 rounded-full aspect-square flex-shrink-0 ${bgcolor} text-white shadow-lg transition duration-200 hover:cursor-pointer`}
      aria-label={ariaLAbel}
      onClick={functionality || defaultButtonHandling}
    >
      {icon}
    </button>
  );
};

export default IconButton;

//check the console for the current errors
