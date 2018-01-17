import React, { Component } from "react";
import * as actions from "./../actions";
import { connect } from "react-redux";
import { Grid, Statistic, Image } from "semantic-ui-react";

class WeatherData extends Component {

  renderData = () => {
    const data = this.props.data.data.current_observation;
    if (this.props.data.isFound === true) {
      return (
        <div style={{color: "white", width: "60%"}}>
          <h3>{data.display_location.full}</h3>
          <h4>Local time: {data.local_time_rfc822}</h4>
          <Image src={data.icon_url} centered size="tiny"/>
          <h6>{data.observation_time}</h6>
          <Grid columns={4}>
            <Grid.Row>
              <Grid.Column>
                <Statistic>
                  <Statistic.Label style={{color: "#00aca4"}}>Temp:</Statistic.Label>
                  <Statistic.Value text style={{color: "white"}}>{data.temperature_string}</Statistic.Value>
                  <Statistic.Label style={{color: "#00aca4"}}>Feels like:</Statistic.Label>
                  <Statistic.Value text style={{color: "white"}}>{data.feelslike_string}</Statistic.Value>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic>
                  <Statistic.Label style={{color: "#00aca4"}}>Wind:</Statistic.Label>
                  <Statistic.Value text style={{color: "white"}}>{data.wind_mph} MPH</Statistic.Value>
                  <Statistic.Label style={{color: "#00aca4"}}>Gust:</Statistic.Label>
                  <Statistic.Value text style={{color: "white"}}>{data.wind_gust_mph} MPH</Statistic.Value>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic>
                  <Statistic.Label style={{color: "#00aca4"}}>Weather:</Statistic.Label>
                  <Statistic.Value text style={{color: "white"}}>{data.weather}</Statistic.Value>
                  <Statistic.Label style={{color: "#00aca4"}}>Wind Direction:</Statistic.Label>
                  <Statistic.Value text style={{color: "white"}}>{data.wind_dir}</Statistic.Value>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic>
                  <Statistic.Label style={{color: "#00aca4"}}>Precipitation:</Statistic.Label>
                  <Statistic.Value text style={{color: "white"}}>{data.precip_today_string}</Statistic.Value>
                  <Statistic.Label style={{color: "#00aca4"}}>Humidity:</Statistic.Label>
                  <Statistic.Value text style={{color: "white"}}>{data.relative_humidity}</Statistic.Value>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      );
    } else if (this.props.data.isFound === false) {
      return (
        <div style={{color: "white"}}>
          <h1>City is not found</h1>
          <h2>Please specifiy the state or country</h2>
          <h3>The location you have searched contains more than one cities</h3>
        </div>
      );
    } else {
        return (
          <div style={{color: "white"}}>
            <h1>Search for a city</h1>
          </div>
      );
    }
  }

  render() {
    return (
      <div style={{textAlign:"center", display: "flex", justifyContent: "center", alignItems: "center"}}>
        {this.renderData()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps, actions)(WeatherData);
