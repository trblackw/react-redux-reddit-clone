import { combineReducers } from "redux";

import posts from "./reducers/index";

const rootReducer = combineReducers({
  posts
});

export default rootReducer;
