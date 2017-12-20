import { FETCH_FORECAST_DATA, FETCH_ERROR } from "./../actions/types";

const initialState = {
  forecast: [],
  isFound: null,
  location: null
}

function forecastDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FORECAST_DATA:
      return {
        ...state,
        forecast: action.payload,
        isFound: true
      };
    case FETCH_ERROR:
      return {
        ...state,
        isFound: action.payload
      }
    default:
      return state;
  }
}

export default forecastDataReducer;
