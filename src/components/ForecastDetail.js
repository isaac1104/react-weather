import React from "react";
import { Container, Image } from "semantic-ui-react";

const ForecastDetail = (props) => {
  return (
    <Container>
      <h3 style={{color: "#00aca4"}}>{props.date}</h3>
      <Image src={props.icon} centered/>
      <h5 style={{color: "white"}}>{props.conditions}</h5>
      <h5 style={{color: "white"}}>High: {props.high.fahrenheit}F ({props.high.celsius}C)</h5>
      <h5 style={{color: "white"}}>Low: {props.low.fahrenheit}F ({props.low.celsius}C)</h5>
    </Container>
  );
}

export default ForecastDetail;
