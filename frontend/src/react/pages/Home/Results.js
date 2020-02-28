/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";
import { connect } from "react-redux";

// MaterialUI
import { Grid, Box, Typography } from "@material-ui/core";

// CSS
import styles from "./css/Results.css";

// Components
import ResultsList from "./ResultsList";
import Center from "../../components/general/Center";
import Dots from "../../components/general/Dots";

/* Component */
class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStatus: this.props.searchStatus,
      results: [],
      animation: false,
      query: this.props.query
    };
  }
  componentDidMount() {
    if(this.props.results.length > 0) {
      this.setState({
        results: this.props.results
      });
    }
  }
  componentDidUpdate(prevProps) {
    if(prevProps.searchStatus != this.props.searchStatus) {
      this.setState({
        searchStatus: this.props.searchStatus,
        animation: this.props.searchStatus === "loading"
      });
    }
    if(prevProps.results != this.props.results) {
      this.setState({
        results: this.props.results
      });
    }
    if(prevProps.query != this.props.query) {
      this.setState({
        query: this.props.query
      });
    }
  }
  render() {
    return (
      <Grid container direction="column" justify={this.state.searchStatus === "done" ? "flex-start" : "center"} className={styles.container}>
        {
          this.state.searchStatus === "empty" ? (
            <Center>
                Start typing in the search box!
            </Center>
          ) : this.state.searchStatus === "loading" ? (
            <Center>
                Loading<Dots />
            </Center>
          ) : this.state.searchStatus === "done" ? (
            <Box className={styles.resultsContainer}>
              {
                this.state.results.length > 0 ? (
                  <ResultsList results={this.state.results} history={this.props.history} />
                ) : (
                  <Box className={styles.status}>
                    <Typography variant="h6">
                No businesses found for '{this.state.query}'! Try another search.
                    </Typography>
                  </Box>
                )
              }
            </Box>
          ) : (
            <Center>
              Something happened! Please try again.
            </Center>
          )
        }
      </Grid>
    );
  }
}

/* Map state to props */
const mapStateToProps = (state) => {
  return {
    searchStatus: state.results.status,
    results: state.results.results,
    query: state.search.query
  };
};

/* Export */
export default connect(mapStateToProps)(Results);