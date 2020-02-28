/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// CSS
import styles from "./css/Navigation.css";

// Layout
import Header from "../layout/Header";

// Pages
import Home from "../../pages/Home";
import Business from "../../pages/Business";

/* Component */
export default function Navigation() {
  const pages = [
    Business
  ];
  return (
    <Router>
      <Header />
      <div className={styles.page}>
        <Switch>
          <Route exact path="/" component={Home} />
          {
            pages.map((page, index) => {
              return <Route key={page.pageInformation.name} path={page.pageInformation.path} component={page} />;
            })
          }
        </Switch>
      </div>
    </Router>
  );
}