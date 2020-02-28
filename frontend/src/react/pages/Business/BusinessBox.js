/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";

// MaterialUI
import { Box, Grid, Typography, Button } from "@material-ui/core";

// CSS
import styles from "./css/BusinessBox.css";

// Components
import ContentBox from "../../components/general/ContentBox";
import Review from "./Review";

/* Component */
export default function BusinessBox(props) {
  return (
    <ContentBox hover={false}>
      <Grid container direction="column" justify="center" className={styles.container}>
        <Grid container direction="column" justify="center" alignItems="center" className={styles.topContainer}>
          <Box color="#d32323">
            <Typography variant="h6">
              { props.info.name }
            </Typography>
          </Box>
          <Box className={styles.address}>
            <Typography>
              { props.info.address }
            </Typography>
          </Box>
        </Grid>
        <hr className={styles.line} />
        {
          props.info.imageURL != "" ? (
            <Box className={styles.imageContainer}>
              <img src={props.info.imageURL} alt="" className={styles.image} />
              <hr className={styles.line} />
            </Box>
          ) : (
            <span />
          )
        }
        <Grid container justify="center" alignItems="center" direction="column" className={styles.infoContainer}>
          <Box className={styles.info}>
            <Grid container direction="column" justify="center" className={styles.firstInfoContainer}>
              <Typography>
                { props.info.phone }
              </Typography>
              <Typography>
                Average <span className={styles.standOut}>{ props.info.overallRating }</span> {props.info.overallRating > 1 ? "stars" : "star"}
              </Typography>
            </Grid>
          </Box>
          {
            props.info.hours.length > 0 ? (
              <>
                <hr className={styles.line} />
                <Box className={styles.info}>
                  <ul>
                    {
                      props.info.hours.map((value, index) => {
                        return (
                          <li key={value.day}>
                            <Typography>
                              <span className={props.info.currentDay.toUpperCase() === value.day.toUpperCase() ? styles.green : ""}>{ value.day }:</span> <span className={props.info.currentDay.toUpperCase() === value.day.toUpperCase() ? [ (props.info.isClosed ? styles.red : styles.green) ] : ""}>{ value.open } - {value.close}</span>
                            </Typography>
                          </li>
                        );
                      })
                    }
                  </ul>
                </Box>
              </>
            ) : (
              <span />
            )
          }
          <hr className={styles.line} />
          <Box className={styles.info}>
            <Grid container direction="column" justify="flex-start" alignItems="center" className={styles.reviewContainer}>
              <Review id={props.info.id} />
              <Button variant="contained" title="View on Yelp" color="primary" className={styles.yelpButton}  onClick={() => window.open(props.info.yelpURL, "_blank")} id="button">
                <span id="buttonContent">View on Yelp</span>
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ContentBox>
  );
}