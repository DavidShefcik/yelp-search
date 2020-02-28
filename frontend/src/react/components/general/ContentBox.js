/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";

// CSS
import styles from "./css/ContentBox.css";

// MaterialUI
import { Box } from "@material-ui/core";

/* Component */
export default function ContentBox(props) {
  return (
    <Box className={`${props.hover ? styles.containerHoverable : styles.container}`}>
      { props.children }
    </Box>
  );
}