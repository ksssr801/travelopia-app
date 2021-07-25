//Internal imports
import "./App.css";
import "./bootstrap.min.css";

//Library imports
import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import BookingDetails from "./pages/BookingDetails";
import Home from "./pages/Home";
import Default from "./pages/Default";

export default class App extends Component {
  render() {
    return (
        <div>
          <React.Fragment>
            <BrowserRouter>
              {/* <NavBar /> */}
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/all-bookings" component={BookingDetails} />
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
