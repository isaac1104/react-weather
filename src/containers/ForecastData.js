import React, { Component } from "react";
import ForecastDetail from "./../components/ForecastDetail";
import * as actions from "./../actions";
import { connect } from "react-redux";

class ForecastData extends Component {

  renderForecast = () => {
    const data = this.props.forecast.forecast.forecast;
    if (this.props.forecast.isFound === true) {
      const forecast = data.simpleforecast.forecastday;
      return (
        <div style={{textAlign:"center"}}>
          <div style={{display: "flex", margin: "3rem 0 3rem 0", justifyContent: "center", alignItems: "center"}}>
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
          </div>
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderForecast()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    forecast: state.forecast
  }
}

export default connect(mapStateToProps, actions)(ForecastData);
