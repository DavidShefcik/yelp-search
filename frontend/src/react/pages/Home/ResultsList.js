/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";

// MaterialUI
import { Box, Typography } from "@material-ui/core";

// CSS
import styles from "./css/ResultsList.css";

// Components
import Result from "./Result";

/* Component */
export default function ResultsList(props) {
  return (
    <Box className={styles.container}>
      <Typography>
          Showing <span className={styles.standOut}>{ props.results.length } </span> { props.results.length > 1 ? "results" : "result" }.
      </Typography>
      <ul>
        {
          props.results.map((business, index) => {
            return (
              <li key={business.id}>
                <Result info={business} history={props.history} />
              </li>
            );
          })
        }
      </ul>
    </Box>
  );
}