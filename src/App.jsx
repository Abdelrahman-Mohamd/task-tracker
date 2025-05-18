import Heading from "./components/atoms/Heading.jsx";
import IconButton from "./components/atoms/IconButton.jsx";
import "./index.css";
import TodoCard from "./components/organisms/TodoCard.jsx";

function App() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50">
      <TodoCard />
    </div>
  );
}

export default App;
