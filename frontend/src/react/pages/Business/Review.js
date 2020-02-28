/*

  getReviews = async (id) => {
    let apiRes = await axios
      .get(`/businesses/review?id=${this.props.id}`)
      .catch(error => {
        console.error(error);
        this.setState({
          loading: false,
          error: true
        });
      });
    let { data } = apiRes;
    if(data) {
      this.setState({
        review
      });
    }
  }
  */

/* Imports */
// Modules
import React from "react";
import axios from "../../../modules/axios";

// MaterialUI
import { Box, Grid, Typography } from "@material-ui/core";

// CSS
import styles from "./css/Review.css";

// Components
import Center from "../../components/general/Center";
import Dots from "../../components/general/Dots";

/* Component */
export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {},
      error: false,
      loading: true
    };
  }
  componentDidMount() {
    this.getReview();
  }
  getReview = async () => {
    try {
      let apiRes = await axios
        .get(`/businesses/review?id=${this.props.id}`);
      let { data } = apiRes;
      if(data) {
        this.setState({
          review: data["review"],
          loading: false,
          error: false
        });
      }
    } catch(error) {
      console.error(error);
      this.setState({
        loading: false,
        error: true
      });
    }
  }
  render() {
    return (
      <Grid container direction="column" justify="flex-start" alignItems="center" className={styles.container}>
        <Box className={styles.reviewTitle}>
          <Typography>
            Random Review
          </Typography>
        </Box>
        {
          this.state.loading ? (
            <Center>
                Loading<Dots />
            </Center>
          ) : this.state.error ? (
            <Center>
              Something happened! Please try again!
            </Center>
          ) : this.state.review["id"] === "" ? (
            <Center>
              No reviews available.
            </Center>
          ) : (
            <Grid container direction="column" alignItems="flex-start" justify="flex-start" className={styles.reviewContainer}>
              <Box>
                <Typography>
                  By: <span className={`${styles.standOut} ${styles.hover}`} title={this.state.review.user.name} onClick={() => window.open(this.state.review.user.url, "_blank")}>{ this.state.review.user.name }</span>
                </Typography>
                <Typography>
                  Date: { this.state.review.time }
                </Typography>
                <Typography>
                  Rated: <span className={styles.standOut}>{this.state.review.rating}</span> { this.state.review.rating > 1 ? "stars" : "star" }
                </Typography>
                <hr className={styles.line} />
                <Box className={styles.text}>
                  <Typography>
                    { this.state.review.text }
                  </Typography>
                </Box>
              </Box>
            </Grid>
          )
        }
      </Grid>
    );
  }
}