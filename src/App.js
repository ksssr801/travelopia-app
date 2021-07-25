import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BookingDetails from "./pages/BookingDetails";
import Default from "./pages/Default";
import Home from "./pages/Home";

export default class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <BrowserRouter>
            {/* <NavBar /> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/all-booking" component={BookingDetails} />
              <Route component={Default} />
            </Switch>
          </BrowserRouter>
          {/* <InfoFooterBar />
            <FooterBar /> */}
        </React.Fragment>
      </div>
    );
  }
}
