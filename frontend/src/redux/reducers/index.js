/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import { combineReducers } from "redux";

// Reducers
import search from "./search";
import results from "./results";

/* Combine */
const rootReducer = combineReducers({
  search,
  results
});

/* Export */
export default rootReducer;