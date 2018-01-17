import React from "react";
import { Header as NavHeader, Icon } from "semantic-ui-react";

const Header = () => {

  const style = {
  marginBottom: "2rem",
  width: "100%",
  backgroundColor: "#00aca4",
  textAlign: "center"
}

  return (
    <div style={style}>
      <NavHeader
        as="h1"
        icon
        style={{color: "white"}}
      >
        <Icon name="rain"/>
        <a href="/" style={{color: "white"}}>Weather App</a>
      </NavHeader>
    </div>
  );
}

export default Header;
