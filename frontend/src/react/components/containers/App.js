/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";
import { Provider } from "react-redux";

// Redux
import { store } from "../../../redux/store";

// MaterialUI
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

// CSS
import "./css/App.css";

// Components
import Navigation from "./Navigation";

/* Component */
export default class App extends React.PureComponent {
  theme = createMuiTheme({
    palette: {
      primary: {
        main: "#d32323",
      },
      secondary: {
        main: "#a10d0d"
      }
    }
  });
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={this.theme}>
          <Navigation />
        </ThemeProvider>
      </Provider>
    );
  }
}