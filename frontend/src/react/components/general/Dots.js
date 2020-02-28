/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";

/* Component */
export default class Dots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dots: ""
    };
    this.animationInterval = null;
  }
  componentDidMount() {
    let dots = this.dots;
    this.animationInterval = setInterval(function() {
      dots();
    }, 500);
  }
  dots = () => {
    let dots = this.state.dots;
    if(dots.length + 1 > 3) {
      dots = "";
    } else {
      dots += ".";
    }
    this.setState({
      dots
    });
  }
  componentWillUnmount() {
    if(this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }
  render() {
    return <span>{ this.state.dots }</span>;
  }
}