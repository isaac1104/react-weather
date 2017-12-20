import { FETCH_WEATHER_DATA, FETCH_CURRENT_LOCATION } from "./../actions/types";

const initialState = {
  data: [],
  location: null
}

function weatherDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER_DATA:
      return {
        ...state,
        data: action.payload
      };
    case FETCH_CURRENT_LOCATION:
      return {
        ...state,
        location: action.payload
      }
    default:
      return state;
  }
}

export default weatherDataReducer;
