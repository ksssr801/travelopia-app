import React, { Component } from "react";
import { ProductConsumer } from "../context";

export default class BookingDetails extends Component {
  static contextType = ProductConsumer;
  componentDidMount() {
    // getModuleHeader(mainHeader=string/HTML, isHomeModule=Boolean, headerId=string)
    this.context.getModuleHeader("Booking Details", false, "bookingDetails");
  }
  render() {
    return (
      <ProductConsumer>
        {(props) => {
          return (
            <div>
              <h1>Booking Details</h1>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

// export default BookingDetails;
