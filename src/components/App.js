import React from "react";
import Header from "./Header";
import Search from "./../containers/Search";
import DataContainer from "./DataContainer";

const App = () => {
  return (
    <div style={{
        backgroundColor: "black",
        minHeight: "100vh"
    }}
    >
      <Header/>
      <Search/>
      <DataContainer/>
    </div>
  );
}

export default App;
