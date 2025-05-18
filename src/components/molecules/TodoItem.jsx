import React, { useId } from "react";
import CheckBox from "../atoms/CheckBox";
import Label from "../atoms/Label";

const TodoItem = ({ text, className = "" }) => {
  const checkboxId = useId();
  return (
    <div className={`flex flex-row items-center gap-2 w-full ${className}`}>
      <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 md:h-8 md:w-8">
        <CheckBox id={checkboxId} />
      </div>
      <Label
        htmlFor={checkboxId}
        text={text}
        className="break-words whitespace-pre-line w-full"
      />
    </div>
  );
};

export default TodoItem;
