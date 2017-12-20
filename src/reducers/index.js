import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import weatherDataReducer from "./weather_data_reducer";

const rootReducer = combineReducers({
  data: weatherDataReducer,
  form: formReducer
});

export default rootReducer;
