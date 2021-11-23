import { combineReducers } from "redux";
import counter from "./counter";
import hello from "./hello";

const rootReducer = combineReducers({
  counter,
  hello,
});

export default rootReducer;
