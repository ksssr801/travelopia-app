import React, { Component } from "react";
import { ProductConsumer } from "../context";

class Home extends Component {
  render() {
    return (
      <ProductConsumer>
        {(props) => {
            console.log("props : ", props)
          return (
            <div>
              <h1>Home</h1>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Home;
