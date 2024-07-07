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
  WiNightClear,
  WiNightAltCloudy,
  WiNightAltRain,
  WiNightAltSnow,
  WiNightAltLightning,
} from "react-icons/wi";

function Weather({ city, setTimeZoneOffset }) {
  const [datas, setDatas] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isday, setIsDay] = useState(true);

  const weatherdata = async () => {
   
    setLoading(true);
    setError(null);
    try {
      const VITE_API_KEY = `6f8185beb4da6c7734507a25d6397573`;
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${VITE_API_KEY}`
      );
      console.log("Fetched data", response.data);
      setDatas(response.data);
      const timeZoneOffset = response.data.timezone * 1000;
      setTimeZoneOffset(timeZoneOffset);

      const { sunrise, sunset } = response.data.sys;
      const currenttime = response.data.dt;

      const currentLocalTime = currenttime;
      const isdaytime =
        currentLocalTime >= sunrise && currentLocalTime < sunset;
      setIsDay(isdaytime);
      console.log("it is ", isdaytime);
      console.log("Sunrise:", new Date(sunrise * 1000).toLocaleTimeString());
      console.log("Sunset:", new Date(sunset * 1000).toLocaleTimeString());
      console.log(
        "Current Local Time:",
        new Date(currentLocalTime * 1000).toLocaleTimeString()
      );
    } catch (error) {
      setDatas(null);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (city) {
      weatherdata("");
    }
  }, [city, setTimeZoneOffset]);
  const getWeatherIcon = (main) => {
    switch (main) {
      case "Clear":
        return isday ? <WiDaySunny /> : <WiNightClear />;
      case "Clouds":
        return isday ? <WiCloud /> : <WiNightAltCloudy />;
      case "Rain":
        // return <WiRain />;
        return isday ? <WiRain /> : <WiNightAltRain />;

      case "Snow":
        // return <WiSnow />;
        return isday ? <WiSnow /> : <WiNightAltSnow />;

      case "Thunderstorm":
        return isday ? <WiThunderstorm /> : <WiNightAltLightning />;
      default:
        return isday ? <WiDaySunny /> : <WiNightClear />;
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
        {loading && <p className="loading">{loading}</p>}
        {error && <p className="error-part">{error}</p>}
        {datas && (
          <div className="temp-description">
            <h3 className="location">{datas.name}</h3>
            <h2>{getWeatherIcon(datas.weather[0].main)}</h2>
            <p className="temprature">{Math.floor(datas.main.temp)} °C</p>
            <p className="weather-type">{datas.weather[0].description}</p>
            <div className="HWR">
              <div className="humidity">
                <p>
                  <span>
                    <WiHumidity />
                  </span>
                  : {datas.main.humidity} %
                </p>
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
                <p>
                  {" "}
                  <span>
                    <WiRain />
                  </span>
                  : {getRainData(datas.rain)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Weather;
