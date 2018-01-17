import React from "react";
import WeatherData from "./../containers/WeatherData";
import ForecastData from "./../containers/ForecastData";

const DataContainer = () => {
  return (
    <div>
      <WeatherData/>
      <ForecastData/>
    </div>
  );
}

export default DataContainer;
