import React from "react";
import WeatherData from "./../containers/WeatherData";
import ForecastData from "./../containers/ForecastData";
import { Container } from "semantic-ui-react";

const DataContainer = () => {
  return (
    <Container>
      <WeatherData/>
      <ForecastData/>
    </Container>
  );
}

export default DataContainer;
