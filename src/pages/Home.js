import React, { Component } from "react";
// import { ProductConsumer } from "../context";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      destination: "",
      budget: null,
      travellersCount: null,
    };
  }

  handleInputChange = (event) => {
    let name = event.target.name;
    let val = event.target.value;
    this.setState({
      [name]: val,
    });
  };

  submitHandler = (event) => {
    console.log("data : ", this.state);
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
            <Button color="inherit">Booking Details</Button>
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
              <form className="row g-3">
                <div className="col-md-6 mb-3">
                  <InputLabel id="demo-simple-select-label">Name</InputLabel>
                  <TextField
                    fullWidth
                    name="name"
                    id="inputName"
                    defaultValue={this.state.name}
                    variant="outlined"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <InputLabel id="demo-simple-select-label">Email</InputLabel>
                  <TextField
                    fullWidth
                    name="email"
                    id="inputEmail"
                    defaultValue={this.state.email}
                    variant="outlined"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <InputLabel id="destinationOpt">
                    Select Destination
                  </InputLabel>
                  <Select
                    fullWidth
                    variant="outlined"
                    name="destination"
                    value={this.state.destination}
                    onChange={this.handleInputChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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
                    defaultValue={this.state.budget}
                    variant="outlined"
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
                    defaultValue={this.state.travellersCount}
                    variant="outlined"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col-12 mb-3">
                  <Button
                    onClick={this.submitHandler}
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<SaveIcon />}
                  >
                    Save
                  </Button>
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
