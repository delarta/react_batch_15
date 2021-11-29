import { combineReducers } from "redux";
import counter from "./counter";
import hello from "./hello";
import cart from "./cart";
import products from "./products";

const rootReducer = combineReducers({
  counter,
  hello,
  cart,
  products
});

export default rootReducer;
