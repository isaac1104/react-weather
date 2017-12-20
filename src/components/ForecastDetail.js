import React from "react";
import { Container, Image } from "semantic-ui-react";

const ForecastDetail = (props) => {
  return (
    <Container>
      <h3>{props.date}</h3>
      <Image src={props.icon}/>
      {props.conditions}
      <h5>High: {props.high.farenheit}F ({props.high.celsius})</h5>
      <h5>Low: {props.low.farenheit}F ({props.low.celsius})</h5>
    </Container>
  );
}

export default ForecastDetail;
