import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class Default extends Component {
  render() {
    return (
      <div className="container text-center">
        <Button color="primary" variant="contained">
          {" "}
          Press me{" "}
        </Button>
        <div className="row">
          <div className="col-10 mx-auto pt-5 text-center">
            <h1>404</h1>
            <h2>Error</h2>
            <h4>Page not found !</h4>
            <span>
              The requested url{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              not found.
            </span>
            <span>{console.log(this.props)}</span>
          </div>
        </div>
      </div>
    );
  }
}
