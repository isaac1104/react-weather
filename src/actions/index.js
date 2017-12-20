import axios from "axios";
import { FETCH_WEATHER_DATA, FETCH_CURRENT_LOCATION, FETCH_ERROR } from "./types";

export const getWeatherData = (location) => async dispatch => {
  const key = "f63058c1c22f2729";
  const request = await axios.get(`http://api.wunderground.com/api/${key}/conditions/q/${location}.json`);
  const { data } = request;
  if (data.response.error || data.response.results) {
    dispatch({ type: FETCH_ERROR, payload: false });
  } else {
    dispatch({ type: FETCH_WEATHER_DATA, payload: data });
  }
}

export const getCurrentLocation = () => {
  if (navigator.geolocation) {
    console.log(navigator.geolocation);
    return {
      type: FETCH_CURRENT_LOCATION,
      payload: true
    }
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}
