import React, { Component } from "react";
import ForecastDetail from "./../components/ForecastDetail";
import * as actions from "./../actions";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";

class ForecastData extends Component {

  renderForecast = () => {
    const data = this.props.forecast.forecast.forecast;
    if (this.props.forecast.isFound === true) {
      const forecast = data.simpleforecast.forecastday;
      return (
        <Container textAlign="center">
          <h4 style={{color: "white"}}>10 Day Forecast</h4>
          <Container style={{display: "flex", margin: "3rem 0 3rem 0"}}>
            {forecast.map((day) => {
              return (
                <ForecastDetail
                  key={day.period}
                  date={day.date.weekday_short}
                  conditions={day.conditions}
                  icon={day.icon_url}
                  high={day.high}
                  low={day.low}
                />
              );
            })}
          </Container>
        </Container>
      )
    } else {
      return(
        <Container></Container>
      )
    }
  }

  render() {
    return (
      <Container>
        {this.renderForecast()}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    forecast: state.forecast
  }
}

export default connect(mapStateToProps, actions)(ForecastData);
