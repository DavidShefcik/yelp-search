/*
* David Shefcik 2020
*/

/* Imports */
// Types
import { SET_RESULTS } from "./types";

/* Actions */
// Set
export const setResults = (payload) => (dispatch) => {
  dispatch({
    type: SET_RESULTS,
    payload
  });
};