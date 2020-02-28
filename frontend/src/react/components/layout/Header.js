/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";
import { Link } from "react-router-dom";

// MaterialUI
import { AppBar, Grid, Box, Button, Typography } from "@material-ui/core";

// CSS
import styles from "./css/Header.css";

/* Component */
const Header = (props) => {
  return (
    <AppBar className={styles.container}>
      <Grid container alignItems="center" justify="center" direction="row">
        <Box>
          <Link to="/">
            <Button title="Yelp Naperville" color="inherit">
              <Typography variant="h6">
                Yelp Naperville
              </Typography>
            </Button>
          </Link>
        </Box>
      </Grid>
    </AppBar>
  );
};

/* Export */
export default Header;