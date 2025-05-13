import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <div className="flex items-center bg-white rounded-full shadow px-3 py-1 w-full max-w-xs md:max-w-lg">
      <SearchIcon className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search"
        className="outline-none bg-transparent text-gray-700 font-poppins placeholder-gray-400"
      />
    </div>
  );
};

export default SearchInput;
