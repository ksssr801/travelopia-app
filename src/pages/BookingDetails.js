import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import { Link } from "react-router-dom";

class BookingDetails extends Component {
  componentDidMount() {
    this.getBookingInfo();
  }

  constructor(props) {
    super(props);
    this.state = {
      allBookings: []
    };
  }

  tblColumns = [
    { field: "booking_id", headerName: "ID", width: 150, },
    { field: "traveller", headerName: "Traveller", width: 200, },
    { field: "email_id", headerName: "Email ID", width: 200, },
    { field: "destination", headerName: "Destination", width: 200, },
    { field: "total_travellers", headerName: "Total Travellers", width: 200, },
    { field: "budget_per_person", headerName: "Budget/Person", width: 200, },
  ];

  getBookingInfo = () => {
    axios
      .get("http://localhost:9090/travelapp/booking-details/")
      .then((res) => {
        this.setState({
          allBookings: res.data,
        });
      })
      .catch((error) => {
        console.log("error : ", error);
      });
  };

  render() {
    return (
      <div className="" style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" className="" style={{ flexGrow: 1 }}>
              Travelopia
            </Typography>
            <br />
            <Button color="inherit">
              <Link to="/" style={{ textDecoration: "None", color: "#fff" }}>
                Do Booking
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
        <br />
        <Typography
          variant="h6"
          className="text-center"
          style={{ flexGrow: 1 }}
        >
          All Booking Details
        </Typography>
        <br />
        <div className="p-2">
          <div className="card">
            <div className="card-body">
              <div className="row g-3">
                <div style={{ height: 400, width: "100%" }}>
                  <DataGrid
                    rows={this.state.allBookings}
                    columns={this.tblColumns}
                    getRowId={(row) => row.booking_id}
                    pageSize={10}
                    checkboxSelection
                    disableSelectionOnClick
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default BookingDetails;
