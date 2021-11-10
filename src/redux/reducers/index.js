import { combineReducers } from "redux";

import posts from "./postsReducers";
import todos from "./todosReducers";
import accounts from "./accountsReducers";

export default combineReducers({
  posts,
  todos,
  accounts,
});
