import React, { Component } from "react";
import axios from "axios";
import Review from "./review";

// PROPS:
// product
//

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      reviews: [] // [{review_01_obj}, {review_02_obj},....]
    };
  }

  componentDidMount() {
    console.log("seting product....", this.state.product);
    this.setState({ product: this.props.oneProduct });
    // let productPromice = axios.get(`/api/${this.props.productId}`);
    // let reviewsPromise = axios.get(`/api/${this.props.productId}/reviews`);
    // Promise.all([
    //   productPromice,
    //   reviewsPromise
    // ]).then((oneProduct, allReviews) => {
    //   this.setState({
    //     product: oneProduct,
    //     reviews: allReviews
    //   });
    // });
  }

  render() {
    return (
      <div>
        <div>
          <h1 align="center">Welcome to product`s` page</h1>
          <div>id: {this.state.product.id}</div>
          <div>name: {this.state.product.name}</div>
          <div>price: {this.state.product.price}</div>
          <div>picture: {this.state.product.picture}</div>
          <div>description: {this.state.product.description}</div>
          <div>quantity: {this.state.product.quantity}</div>
          <div>From category: {this.state.product.categoryId}</div>
        </div>
        <hr />
        <div>
          <h2 align="center">Reviews:</h2>
          <hr />
          {this.state.reviews.map(item => {
            return (
              <div key={item.id}>
                <Review item={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
