import CheckBox from "./components/atoms/CheckBox.jsx";
import GenericButton from "./components/atoms/GenericButton.jsx";
import Heading from "./components/atoms/Heading.jsx";
import Label from "./components/atoms/Label.jsx";
import IconButton from "./components/atoms/IconButton.jsx";
import SearchInput from "./components/atoms/SearchInput.jsx";
import "./index.css";

function App() {
  return (
    <>
      <CheckBox />
      <GenericButton />
      <Label />
      <Heading />
      <IconButton />
      <SearchInput />
    </>
  );
}

export default App;
