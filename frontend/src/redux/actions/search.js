/*
* David Shefcik 2020
*/

/* Imports */
// Types
import { SET_SEARCH } from "./types";

/* Actions */
// Set
export const setSearch = (payload) => (dispatch) => {
  dispatch({
    type: SET_SEARCH,
    payload
  });
};