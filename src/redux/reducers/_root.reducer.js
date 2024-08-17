import { combineReducers } from "redux";
import locations from "./locations.reducer";

const rootReducer = combineReducers({
  locations,
});

export default rootReducer;
