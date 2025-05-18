import React from "react";
import AddIcon from "@mui/icons-material/Add";

const TextInput = ({ functionality, value }) => {
  return (
    <div className="flex items-center w-full px-3 py-1 bg-white rounded-lg shadow max-w-46 md:max-w-lg">
      <AddIcon className="mr-2 text-gray-400" />
      <input
        type="text"
        placeholder="Add task"
        className="text-gray-700 placeholder-gray-400 bg-transparent outline-none font-poppins"
        onChange={functionality}
        value={value}
      />
    </div>
  );
};

export default TextInput;
