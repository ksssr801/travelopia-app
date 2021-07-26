import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputAdornment from "@material-ui/core/InputAdornment";
import SaveIcon from "@material-ui/icons/Save";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import axios from "axios";
import { Link } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Home extends Component {
  componentDidMount() {
    this.getInitOptionConfig();
  }
  constructor(props) {
    super(props);

    this.state = {
      travellerInfo: {
        traveller: "",
        email: "",
        destination: "",
        budget: null,
        travellersCount: null,
      },
      destination_list: [],
    };
  }

  tempTravellerInfo = {};
  handleInputChange = (event) => {
    let name = event.target.name;
    let val = event.target.value;
    this.tempTravellerInfo[name] = val;
    this.setState({
      travellerInfo: this.tempTravellerInfo,
    });
  };

  submitHandler = (event) => {
    axios
      .post(
        "http://localhost:9090/travelapp/do-booking/",
        this.state.travellerInfo
      )
      .then((res) => {
        console.log("res : ", res);
        if (res.data.status === "success") {
          document.getElementById("booking-form").reset();
          toast.success("Booking details saved!", {
            position: "bottom-right",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
          });
        } else {
          toast.error("Error in saving!", {
            position: "bottom-right",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
          });
        }
      })
      .catch((error) => {
        console.log("error : ", error);
      });
  };

  getInitOptionConfig = () => {
    axios
      .get("http://localhost:9090/travelapp/option-config/")
      .then((res) => {
        this.setState({
          destination_list: res.data.destination_list,
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
              <Link
                to="/all-bookings"
                style={{ textDecoration: "None", color: "#fff" }}
              >
                Booking Details
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
          Do Booking
        </Typography>
        <br />
        <div className="p-2">
          <div className="card">
            <div className="card-body">
              <form id="booking-form" className="row g-3">
                <div className="col-md-6 mb-3">
                  <InputLabel id="demo-simple-select-label">
                    Traveller
                  </InputLabel>
                  <TextField
                    fullWidth
                    name="traveller"
                    id="inputTraveller"
                    defaultValue={this.state.travellerInfo.traveller}
                    variant="outlined"
                    onChange={this.handleInputChange}
                    placeholder="Enter traveller name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <InputLabel id="demo-simple-select-label">Email</InputLabel>
                  <TextField
                    fullWidth
                    name="email"
                    id="inputEmail"
                    defaultValue={this.state.travellerInfo.email}
                    variant="outlined"
                    onChange={this.handleInputChange}
                    placeholder="Enter email"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <InputLabel id="destinationOpt">
                    Select Destination
                  </InputLabel>
                  <Select
                    fullWidth
                    native
                    variant="outlined"
                    name="destination"
                    value={this.state.travellerInfo.destination}
                    onChange={this.handleInputChange}
                  >
                    <option value="" disabled>
                      --Select destination--
                    </option>
                    {this.state.destination_list.map(({ id, name }, index) => (
                      <option value={id}>{name}</option>
                    ))}
                  </Select>
                </div>
                <div className="col-md-6 mb-3">
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Budget Per Person
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    name="budget"
                    type="number"
                    id="inputEmail"
                    defaultValue={this.state.travellerInfo.budget}
                    variant="outlined"
                    placeholder="Enter budget"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <InputLabel id="demo-simple-select-label">
                    Number of travellers
                  </InputLabel>
                  <TextField
                    type="number"
                    name="travellersCount"
                    fullWidth
                    id="inputTravellersCount"
                    defaultValue={this.state.travellerInfo.travellersCount}
                    variant="outlined"
                    onChange={this.handleInputChange}
                    placeholder="Enter traveller's count"
                  />
                </div>
                <div className="col-12 mb-3 pull-right">
                  <Button
                    onClick={this.submitHandler}
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<SaveIcon />}
                  >
                    Save
                  </Button>
                  <ToastContainer
                    position="bottom-right"
                    autoClose={2500}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    transition={Bounce}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Home;
