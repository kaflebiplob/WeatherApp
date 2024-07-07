import { useState } from "react";
import InputSection from "./components/input";
import Weather from "./components/weather";
import DateTime from "./components/dateandtime";
import Theme from "./components/theme";

function App() {
  const [city, setCity] = useState("Kathmandu")
  const [timeZoneOffset, setTimeZoneOffset] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);
  


  function toogletheme() {
    setDarkTheme(!darkTheme);
   
  }

  return (
    <div className={darkTheme ? " body dartheme" : "body lighttheme"}>
      <div className="main-container">
        <div className="header-part">
          <Theme toogletheme={toogletheme} darkTheme={darkTheme}/>
          <InputSection setCity={setCity} city={city}/>
        </div>
        <div className="bodypart">
          <DateTime timeZoneOffset={timeZoneOffset} />
          <Weather city={city} setTimeZoneOffset={setTimeZoneOffset} />
        </div>
      </div>
    </div>
  );
}

export default App;
