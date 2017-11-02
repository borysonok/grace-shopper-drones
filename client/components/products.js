import React, { Component } from "react";
import axios from "axios";
import Product from "./product";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      oneProduct: {}
    };
    this.setProduct = this.setProduct.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/products/")
      .then(promise => promise.data)
      .then(allProducts => {
        //console.log("allProducts: ", allProducts);
        this.setState({
          products: allProducts
        });
      });
  }

  setProduct(item) {
    console.log("set state....", item);
    this.setState({ oneProduct: item });
  }

  render() {
    return (
      <div>
        <hr />
        {this.state.products[0] && this.state.products.map((item, index) => (
          <div
            key={item.id}
            onClick={() => {
              this.setProduct(item);
            }}
          >
            {item.name}
          </div>
        ))}
        <h2>Product:</h2>
        <hr />
        {this.state.oneProduct && <Product oneProduct={this.state.oneProduct} />}
      </div>
    );
  }
}
