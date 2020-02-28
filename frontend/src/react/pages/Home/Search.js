/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";
import axios from "../../../modules/axios";
import { connect } from "react-redux";

// Redux
import { setResults } from "../../../redux/actions/results";
import { setSearch } from "../../../redux/actions/search";

// MaterialUI
import { Box, TextField } from "@material-ui/core";

// CSS
import styles from "./css/Search.css";

/* Component */
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      typingTimeout: 0
    };
  }
  componentDidMount() {
    if(this.props.query.replace(/\s/g, "") != "") {
      this.setState({
        value: this.props.query
      });
    }
  }
  componentWillUnmount() {
    clearTimeout(this.state.typingTimeout);
  }
  handleChange = (event) => {
    let { value } = event.target;
    this.setState({
      value
    });
    let lastTypedCharacter = value.substring(value.length - 1, value.length);
    if(value.replace(/\s/g, "").length > 0 && lastTypedCharacter.replace(/\s/g, "").length > 0) {
      this.props.setResults({
        status: "loading",
        results: []
      });
      let searchYelp = this.searchYelp;
      // wait 250ms before actually calling yelp to make sure the user is done typing
      this.setState({
        typing: true,
        typingTimeout: setTimeout(function() {
          searchYelp(value);
        }, 250)
      });
    }

    if(this.state.typingTimeout) {
      clearTimeout(this.state.typingTimeout);
    }
  }
  keyCheck = (event) => {
    if(event.target.value.length === 0 && event.keyCode === 8) {
      this.props.setResults({
        status: "empty",
        results: []
      });
    }
  }
  searchYelp = async (query) => {
    try {
      let apiRes = await axios
        .get(`/businesses/search?query=${encodeURIComponent(query)}&offset=0`);
      let { data } = apiRes;
      if(data) {
        this.props.setSearch(query);
        this.props.setResults({
          status: "done",
          results: data["results"]
        });
      }
    } catch(error) {
      console.error(error);
      this.props.setResults({
        status: "error",
        results: []
      });
    }
  }
  render() {
    return (
      <Box className={styles.container}>
        <TextField id="outlined-basic" label="Search Yelp" value={this.state.value} onChange={this.handleChange} inputProps={{ maxLength: 64, onKeyUp: this.keyCheck }} />
      </Box>
    );
  }
}

/* Map state to props */
const mapStateToProps = (state) => {
  return {
    query: state.search.query
  };
};

/* Export */
export default connect(mapStateToProps, { setResults, setSearch })(Search);