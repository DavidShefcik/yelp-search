/*
* David Shefcik 2020
*/

/* Imports */
// Types
import { SET_SEARCH } from "../actions/types";

/* Initial state */
const initialState = {
  query: ""
};

/* Eval */
export default function(state = initialState, action) {
  switch(action.type) {
  case SET_SEARCH:
    return {
      ...state,
      query: action.payload
    };
  default:
    return state;
  }
}