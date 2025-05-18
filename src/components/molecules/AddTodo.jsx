import React from "react";
import TextInput from "../atoms/TextInput";
import IconButton from "../atoms/IconButton";
import AddIcon from "@mui/icons-material/Add";

const AddTodo = ({ functionality, value, onAdd }) => {
  return (
    <div className="flex flex-row justify-center w-full gap-2 mx-2 my-2">
      <TextInput functionality={functionality} value={value} />
      <IconButton icon={<AddIcon />} functionality={onAdd} />
    </div>
  );
};

export default AddTodo;
