import axios from "axios";
import { FETCH_WEATHER_DATA, FETCH_ERROR, FETCH_FORECAST_DATA } from "./types";

export const getWeatherData = (location) => async dispatch => {
  const key = "f63058c1c22f2729";
  const request = await axios.get(`https://api.wunderground.com/api/${key}/conditions/q/${location}.json`);
  const { data } = request;
  if (data.response.error || data.response.results) {
    dispatch({ type: FETCH_ERROR, payload: false });
  } else {
    dispatch({ type: FETCH_WEATHER_DATA, payload: data });
  }
}

export const getForecastData = (location) => async dispatch => {
  const key = "f63058c1c22f2729";
  const request = await axios.get(`https://api.wunderground.com/api/${key}/forecast10day/q/${location}.json`);
  const { data } = request;
  if (data.response.error || data.response.results) {
    dispatch({ type: FETCH_ERROR, payload: false });
  } else {
    dispatch({ type: FETCH_FORECAST_DATA, payload: data });
  }
}
