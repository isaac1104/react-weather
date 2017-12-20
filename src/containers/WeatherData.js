import React, { Component } from "react";
import * as actions from "./../actions";
import { connect } from "react-redux";
import { Container, Statistic, Image } from "semantic-ui-react";

class WeatherData extends Component {

  renderData = () => {
    const data = this.props.data.data.current_observation;
    if (this.props.data.isFound === true) {
      return (
        <Container style={{color: "white"}}>
          <h3>{data.display_location.full}</h3>
          <h4>Local time: {data.local_time_rfc822}</h4>
          <Image src={data.icon_url} centered size="tiny"/>
          <h6>{data.observation_time}</h6>
          <Statistic.Group widths="four">
            <Statistic>
              <Statistic.Label style={{color: "#00aca4"}}>Temp:</Statistic.Label>
              <Statistic.Value text style={{color: "white"}}>{data.temperature_string}</Statistic.Value>
              <Statistic.Label style={{color: "#00aca4"}}>Feels like:</Statistic.Label>
              <Statistic.Value text style={{color: "white"}}>{data.feelslike_string}</Statistic.Value>
            </Statistic>
            <Statistic>
              <Statistic.Label style={{color: "#00aca4"}}>Wind:</Statistic.Label>
              <Statistic.Value text style={{color: "white"}}>{data.wind_mph} MPH</Statistic.Value>
              <Statistic.Label style={{color: "#00aca4"}}>Gust:</Statistic.Label>
              <Statistic.Value text style={{color: "white"}}>{data.wind_gust_mph} MPH</Statistic.Value>
            </Statistic>
            <Statistic>
              <Statistic.Label style={{color: "#00aca4"}}>Weather:</Statistic.Label>
              <Statistic.Value text style={{color: "white"}}>{data.weather}</Statistic.Value>
              <Statistic.Label style={{color: "#00aca4"}}>Wind Direction:</Statistic.Label>
              <Statistic.Value text style={{color: "white"}}>{data.wind_dir}</Statistic.Value>
            </Statistic>
            <Statistic>
              <Statistic.Label style={{color: "#00aca4"}}>Precipitation:</Statistic.Label>
              <Statistic.Value text style={{color: "white"}}>{data.precip_today_string}</Statistic.Value>
              <Statistic.Label style={{color: "#00aca4"}}>Humidity:</Statistic.Label>
              <Statistic.Value text style={{color: "white"}}>{data.relative_humidity}</Statistic.Value>
            </Statistic>
          </Statistic.Group>
        </Container>
      );
    } else if (this.props.data.isFound === false) {
      return (
        <Container style={{color: "white"}}>
          <h1>City is not found</h1>
          <h2>Please specifiy the state or country</h2>
          <h3>The location you have searched contains more than one cities</h3>
        </Container>
      );
    } else {
        return (
          <Container style={{color: "white"}}>
            <h1>Search for a city</h1>
          </Container>
      );
    }
  }

  render() {
    return (
      <Container fluid textAlign="center">
        {this.renderData()}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps, actions)(WeatherData);
