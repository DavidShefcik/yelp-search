/*
* David Shefcik 2020
*/

/* Imports */
// Types
import { SET_RESULTS } from "../actions/types";

/* Initial state */
// Status: empty = haven't searched yet | loading = loading | error = an error occurred | done = done loading
const initialState = {
  status: "empty",
  results: []
};

/* Eval */
export default function(state = initialState, action) {
  switch(action.type) {
  case SET_RESULTS:
    return {
      ...state,
      status: action.payload.status,
      results: action.payload.results
    };
  default:
    return state;
  }
}