import React from "react";
import Header from "./Header";
import Search from "./../containers/Search";
import DataContainer from "./DataContainer";
import { Container } from "semantic-ui-react";

const App = () => {

  return (
    <Container fluid>
      <Header/>
      <Search/>
      <DataContainer/>
    </Container>
  );
}

export default App;
