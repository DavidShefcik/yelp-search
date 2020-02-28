/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";

// MaterialUI
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

// Components
import Search from "./Search";
import Results from "./Results";

/* Styles */
const useStyles = makeStyles({
  root: {
    paddingTop: 30,
    minHeight: "calc(100vh - 48px)",
    flexWrap: "wrap"
  }
});

/* Component */
const Home = (props) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" alignItems="center" className={classes.root}>
      <Search />
      <Results history={props.history} />
    </Grid>
  );
};

// Page information
Home.pageInformation = {
  name: "Home",
  path: "/"
};

/* Export */
export default Home;