/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Root reducer
import rootReducer from "./reducers";

/* Variables */
// State
const initialState = {};
// Middleware
const middleware = [thunk];

/* Store */
let store;
const composeEnhancers = typeof window != "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

store = createStore(rootReducer, initialState, composeEnhancers(compose(applyMiddleware(...middleware))));

/* Export */
export { store };