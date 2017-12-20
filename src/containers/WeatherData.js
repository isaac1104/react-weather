import React, { Component } from "react";
import * as actions from "./../actions";
import { connect } from "react-redux";
import { Container, Statistic, Image } from "semantic-ui-react";

class WeatherData extends Component {

  renderData = () => {
    const data = this.props.data.data.current_observation;
    if (this.props.data.isFound === true) {
      return (
        <Container>
          <h1>{data.display_location.full}</h1>
          <h3>Local time: {data.local_time_rfc822}</h3>
          <Image src={data.icon_url} centered size="tiny"/>
          <h6>{data.observation_time}</h6>
          <Statistic.Group widths="three">
            <Statistic>
              <Statistic.Label>Temp:</Statistic.Label>
              <Statistic.Value text>{data.temperature_string}</Statistic.Value>
              <Statistic.Label>Feels like:</Statistic.Label>
              <Statistic.Value text>{data.feelslike_string}</Statistic.Value>
              <Statistic.Label>Weather:</Statistic.Label>
              <Statistic.Value text>{data.weather}</Statistic.Value>
            </Statistic>
            <Statistic>
              <Statistic.Label>Wind Direction:</Statistic.Label>
              <Statistic.Value text>{data.wind_dir}</Statistic.Value>
              <Statistic.Label>Wind:</Statistic.Label>
              <Statistic.Value text>{data.wind_mph} MPH</Statistic.Value>
              <Statistic.Label>Gust:</Statistic.Label>
              <Statistic.Value text>{data.wind_gust_mph} MPH</Statistic.Value>
            </Statistic>
            <Statistic>
              <Statistic.Label>Precipitation:</Statistic.Label>
              <Statistic.Value text>{data.precip_today_string}</Statistic.Value>
              <Statistic.Label>Humidity:</Statistic.Label>
              <Statistic.Value text>{data.relative_humidity}</Statistic.Value>
              <Statistic.Label>Visibility:</Statistic.Label>
              <Statistic.Value text>{data.visibility_mi} Mi</Statistic.Value>
            </Statistic>
          </Statistic.Group>
        </Container>
      )
    } else {
      return (
        <Container>
          <h1>Search for a city</h1>
        </Container>
      )
    }
  }

  render() {
    console.log(this.props.data);
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
