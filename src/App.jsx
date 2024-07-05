import { useState } from "react"
import InputSection from "./components/input"
import Weather from "./components/weather"



function App() {
  const[city, setCity] = useState("");


  

  return (
    <div className="main container">

    <InputSection setCity={setCity}/>
    <Weather city={city}  />
    </div>
  )
}

export default App
