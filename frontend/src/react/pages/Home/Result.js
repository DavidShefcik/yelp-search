/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";

// MaterialUI
import { Box, Grid, Typography, Button } from "@material-ui/core";

// CSS
import styles from "./css/Result.css";

// Components
import ContentBox from "../../components/general/ContentBox";

/* Component */
export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasImage: false
    };
  }
  componentDidMount() {
    if(this.props.info.imageURL != "") {
      this.setState({
        hasImage: true
      });
    }
  }
  boxClick = (event) => {
    let { id } = event.target;
    if(id != "buttonContent" && id != "button") {
      this.props.history.push(`/business/${this.props.info.id}`);
    }
  }
  render() {
    return (
      <ContentBox hover={true}>
        <Box title={this.props.info.name} onClick={(event) => this.boxClick(event)}>
          <Grid container direction="row" justify="space-between" alignContent="center" className={styles.topContainer}>
            <Typography>
              { this.props.info.name }
            </Typography>
            <Typography>
            Average <span className={styles.standOut}>{ this.props.info.rating }</span> { this.props.info.rating > 1 ? "stars" : "star" } from <span className={styles.standOut}>{ this.props.info.reviewCount }</span> { this.props.info.reviewCount > 1 ? "reviews" : "review" }
            </Typography>
          </Grid>
          <hr className={styles.topLine} />
          <Grid container direction="row" justify="flex-start" alignContent="center" className={styles.mainContainer}>
            {
              this.state.hasImage ? (
                <img src={this.props.info.imageURL} alt="" className={styles.image} />
              ) : (
                <span />
              )
            }
            <Box className={this.state.hasImage ? styles.normal : styles.noImage}>
              <Grid container direction="column" justify="flex-start" alignContent="flex-start" className={styles.infoContainer}>
                <Box className={styles.box}>
                  <Typography>
                    { this.props.info.categories }
                  </Typography>
                </Box>
                <Box className={styles.box}>
                  <Typography>
                    { this.props.info.location }
                  </Typography>
                </Box>
              </Grid>
            </Box>
            <Box className={styles.buttonContainer}>
              <Button variant="contained" title="View on Yelp" color="primary" className={styles.yelpButton}  onClick={() => window.open(this.props.info.yelpURL, "_blank")} id="button">
                <span id="buttonContent">View on Yelp</span>
              </Button>
            </Box>
          </Grid>
        </Box>
      </ContentBox>
    );
  }
}