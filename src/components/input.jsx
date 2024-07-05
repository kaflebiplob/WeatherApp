import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function InputSection({setCity}) {
  const [inputvalue, setInputValue] = useState("");

  function handleInput(event) {
    setInputValue(event.target.value)
  }
  function handleSearch(e){
    setCity(inputvalue);
 
  }

  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Enter the City name..."
        onChange={handleInput}
        value={inputvalue}
      />
      <button onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
}
export default InputSection;
