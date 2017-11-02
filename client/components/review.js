import React, { Component } from "react";
import axios from "axios";

// PROPS:
// item
//

export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {}
    };
  }

  componentDidMount() {
    this.setState({ review: this.props.item });
  }

  render() {
    return (
      <div>
        <div> Welcome to Review page:</div>
        <hr />
        <div>{this.state.review.stars}</div>
        <div>{this.state.review.text}</div>
        <hr />
      </div>
    );
  }
}
