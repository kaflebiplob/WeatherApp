import { useState } from "react";
import InputSection from "./components/input";
import Weather from "./components/weather";
import DateTime from "./components/dateandtime";

function App() {
  const [city, setCity] = useState("Kathmandu");
  const[timeZoneOffset, setTimeZoneOffset]= useState(0)

  return (
    <div className="main-container">
      <InputSection setCity={setCity} />
      <div className="bodypart">
        <DateTime timeZoneOffset={timeZoneOffset}/>
        <Weather city={city} setTimeZoneOffset={setTimeZoneOffset}/>
      </div>
    </div>
  );
}

export default App;
