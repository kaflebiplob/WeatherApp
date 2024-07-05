import axios from "axios";
import { useEffect, useState } from "react";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiHumidity,
  WiWindy,
} from "react-icons/wi";

function Weather({ city }) {
  const [datas, setDatas] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const weatherdata = async () => {
    if (city == "") {
      //   alert("Enter the city")
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const API_keys = "6f8185beb4da6c7734507a25d6397573";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_keys}&units=metric`
      );
      console.log("Fetched data", response.data);
      setDatas(response.data);
    } catch (error) {
      setDatas(null);
      setError("you got the error", error);
      console.error("you got error", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (city) {
      weatherdata("Kathmandu");
    }
  }, [city]);
  const getWeatherIcon = (main) => {
    switch (main) {
      case "Clear":
        return <WiDaySunny />;
      case "Clouds":
        return <WiCloud />;
      case "Rain":
        return <WiRain />;
      case "Snow":
        return <WiSnow />;
      case "Thunderstorm":
        return <WiThunderstorm />;
      default:
        return <WiDaySunny />;
    }
  };
  const getRainData = (rain) => {
    if (rain) {
      return rain["1h"] ? `${rain["1h"]}mm` : `${rain["3h"]} mm `;
    }
    return "No rain data";
  };

  return (
    <div className="body-section">
      <div className="sub-body">
        {loading && <p className="loading">loading....</p>}
        {error && <p className="error-part">{error}</p>}
        {datas && (
          <div className="temp-description">
            <h3 className="location">{datas.name}</h3>
            <h2>{getWeatherIcon(datas.weather[0].main)}</h2>
            <p className="temprature">{Math.floor(datas.main.temp)} °C</p>
            <p className="weather-type">{datas.weather[0].description}</p>
            <div className="HWR">
              <div className="humidity">
                <p><span>
                  <WiHumidity />
                </span>
                : {datas.main.humidity} %</p>
              </div>
              <div className="humidity">
                <p>
                  <span>
                    <WiWindy />
                  </span>
                  : {datas.wind.speed} Km/H
                </p>
              </div>
              <div className="humidity">
               <p> <span>
                  <WiRain />
                </span>
                : {getRainData(datas.rain)}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Weather;
