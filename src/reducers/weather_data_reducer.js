import { FETCH_WEATHER_DATA, FETCH_ERROR } from "./../actions/types";

const initialState = {
  data: [],
  isFound: null,
  location: null
}

function weatherDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER_DATA:
      return {
        ...state,
        data: action.payload,
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

export default weatherDataReducer;
