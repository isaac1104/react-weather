import React from "react";
import Header from "./Header";
import Search from "./../containers/Search";
import WeatherData from "./../containers/WeatherData";
import { Container } from "semantic-ui-react";

const App = () => {

  return (
    <Container fluid>
      <Header/>
      <Search/>
      <WeatherData/>
    </Container>
  );
}

export default App;
