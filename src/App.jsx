import { useState } from "react";
import InputSection from "./components/input";
import Weather from "./components/weather";
import DateTime from "./components/dateandtime";

function App() {
  const [city, setCity] = useState("Kathmandu");

  return (
    <div className="main-container">
      <InputSection setCity={setCity} />
      <div className="bodypart">
        <DateTime />
        <Weather city={city} />
      </div>
    </div>
  );
}

export default App;
