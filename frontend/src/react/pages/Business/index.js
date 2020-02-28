/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";
import { Link } from "react-router-dom";
import axios from "../../../modules/axios";

// MaterialUI
import { Grid, Box, Button, Typography } from "@material-ui/core";

// CSS
import styles from "./css/Business.css";

// Components
import BusinessBox from "./BusinessBox";
import Center from "../../components/general/Center";
import Dots from "../../components/general/Dots";

/* Component */
export default class Business extends React.Component {
  static pageInformation = {
    name: "Business",
    path: "/business/:id"
  };
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      loading: true,
      error: false,
      info: {}
    };
  }
  componentDidMount() {
    this.getBusinessInfo(); 
  }
  getBusinessInfo = async () => {
    try {
      let apiRes = await axios
        .get(`/businesses/info?id=${this.state.id}`);
      let { data } = apiRes;
      if(data) {
        this.setState({
          info: data["info"],
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
      <Grid container direction="column" justify="flex-start" className={styles.grid}>
        <Box className={styles.container}>
          <Link to="/">
            <Button variant="contained" color="primary" title="Back to Results" className={styles.backButton}>
                Back to Results
            </Button>
          </Link>
        </Box>
        <Grid container direction="column" justify={!this.state.error && !this.state.loading ? "flex-start" : "center"} className={styles.contentGrid}>
          {
            this.state.loading ? (
              <Center>
                  Loading<Dots />
              </Center>
            ) : this.state.error ? (
              <Center>
                Something happened! Please try again.
              </Center>
            ) : (
              <BusinessBox info={this.state.info} />
            )
          }
        </Grid>
      </Grid>
    );
  }
}