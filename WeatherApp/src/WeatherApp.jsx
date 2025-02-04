import InfoBox from "./InfoBox";
import Searchbox from "./Searchbox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    temp: 25.05,
    tempmin: 25.06,
    tempmax: 25.05,
    humidity: 47,
    weather: "haze",
    city: "Delhi",
  });

  let updateInfo = (newinfo) => {
    setWeatherInfo(newinfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>WEATHER APP BY GARVIT</h1>
      <Searchbox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
