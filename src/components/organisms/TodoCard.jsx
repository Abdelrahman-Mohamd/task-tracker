import React, { useState } from "react";
import Heading from "../atoms/Heading";
import IconButton from "../atoms/IconButton";
import AddTodo from "../molecules/AddTodo";
import TodoItem from "../molecules/TodoItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoCard = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function handleInputChange(e) {
    setText(e.target.value);
  }

  function handleAddTodo() {
    if (text.trim() !== "") {
      setTodos([...todos, text]);
      setText("");
    }
  }

  return (
    <>
      <Heading headingText="Task Tracker" />
      <div className="flex flex-col items-center justify-center w-full max-w-xs p-2 mx-2 bg-white rounded-lg shadow-xl sm:mx-5 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl sm:p-4 md:p-6">
        <div className="flex flex-row items-center w-full mb-2">
          <AddTodo
            functionality={handleInputChange}
            value={text}
            onAdd={handleAddTodo}
          />
        </div>
        <div className="flex flex-col w-full gap-2 sm:gap-4">
          {todos.map((todo, idx) => (
            <div
              key={idx}
              className="flex flex-row items-center justify-between w-full"
            >
              <div className="flex-1 max-w-full min-w-0 pr-12">
                <TodoItem
                  className="w-full break-words whitespace-pre-line"
                  text={todo}
                />
              </div>
              <div className="flex flex-row items-center justify-center flex-shrink-0 gap-2 pl-2">
                <IconButton
                  bgcolor="bg-[#D2D0A0] hover:bg-[#C2C0A0]"
                  icon={<EditIcon fontSize="small" />}
                  className="flex-shrink-0"
                />
                <IconButton
                  bgcolor="bg-red-400 hover:bg-red-500"
                  icon={<DeleteIcon fontSize="small" />}
                  className="flex-shrink-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoCard;
