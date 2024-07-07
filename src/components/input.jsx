import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function InputSection({ setCity, city }) {
  const [inputvalue, setInputValue] = useState("");
  // const [showSuggestion, setShowSuggestion] = useState(false);
  // const[filterSuggestion, setFilterSuggestion]=useState([]);




  // function handlesuggestion(suggestion) {
  //   setShowSuggestion(false);
  //   setCity(suggestion);
  //   setInputValue(suggestion)
  //   console.log("Searched Triggered:",inputvalue)
  // }

  function handleInput(event) {
    const values =event.target.value;
    setInputValue(values);
    console.log(event.target.value);

    // if(value){
    //   filterSuggestion =suggestion
    // }
  }
  function handlessearch(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("enter key is pressed");
      handleSearch();
    }
  }

  function handleSearch() {
    if (inputvalue.trim() === "") {
      alert("Enter the city");
      return;
    }
    if (inputvalue.trim().toLowerCase() !== city.toLowerCase()) {
      // alert("Enter the correct city name if city is correct then enter OK");  
      // return;
      console.log("inputValue:", inputvalue.trim().toLowerCase());
      console.log("city:", city.toLowerCase());
    }
    setCity(inputvalue);

    console.log("input value = ", inputvalue);
  }

  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Enter the City name..."
        onChange={handleInput}
        value={inputvalue}
        onKeyDown={handlessearch}
      />
      <button onClick={handleSearch}>
        <FaSearch />
      </button>


    </div>
  );
}
export default InputSection;
