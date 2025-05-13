import React from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const IconButton = ({
  icon = <AddIcon fontSize="small" />,
  bgColor = "bg-[#537D5D] hover:bg-[#3b5842]",
  ariaLAbel = "Add",
  functionality,
}) => {
  function defaultButtonHandling() {
    alert("This button has no functionality added yet");
  }
  return (
    <button
      className={`flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full ${bgColor} text-white shadow-lg transition duration-200 hover:cursor-pointer`}
      aria-label={ariaLAbel}
      onClick={functionality || defaultButtonHandling}
    >
      {icon}
    </button>
  );
};

export default IconButton;
