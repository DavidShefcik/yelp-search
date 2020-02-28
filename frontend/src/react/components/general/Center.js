/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";

// MaterialUI
import { Box, Typography } from "@material-ui/core";

// CSS
import styles from "./css/Center.css";

/* Component */
export default function Center(props) {
  return (
    <Box className={styles.container}>
      <Typography variant="h6">
        { props.children }
      </Typography>
    </Box>
  );
}