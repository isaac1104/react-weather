import React from "react";
import Header from "./Header";
import Search from "./../containers/Search";
import WeatherContainer from "./../containers/WeatherContainer";
import { Container } from "semantic-ui-react";

const App = () => {

  return (
    <Container fluid>
      <Header/>
      <Search/>
      <WeatherContainer/>
    </Container>
  );
}

export default App;
