import React, { Component } from "react";
// import { ProductConsumer } from "../context";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from '@material-ui/core/InputAdornment';
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
  //   static contextType = ProductConsumer;
  //   componentDidMount() {
  //     // getModuleHeader(mainHeader=string/HTML, isHomeModule=Boolean, headerId=string)
  //     this.context.getModuleHeader("Home", false, "home");
  //   }
  render() {
    return (
      <div className="" style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" className="" style={{ flexGrow: 1 }}>
              Travelopia
            </Typography>
            <br />
            <Typography variant="h6" className="" style={{ flexGrow: 1 }}>
              Do Booking
            </Typography>
            <Button color="inherit">Booking Details</Button>
          </Toolbar>
        </AppBar>
        <br />
        <div className="p-2">
          <div className="card">
            <div className="card-body">
              <form className="row g-3">
                <div class="col-md-6 mb-3">
                  <InputLabel id="demo-simple-select-label">Name</InputLabel>
                  <TextField
                    fullWidth
                    id="inputName"
                    defaultValue=""
                    variant="outlined"
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <InputLabel id="demo-simple-select-label">Email</InputLabel>
                  <TextField
                    fullWidth
                    id="inputEmail"
                    defaultValue=""
                    variant="outlined"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <InputLabel id="demo-simple-select-label">
                    Select Destination
                  </InputLabel>
                  <Select fullWidth variant="outlined">
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
                    id="outlined-adornment-amount"
                    value=""
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
      </div>
      //   <ProductConsumer>
      //     {(props) => {
      //       return (
      //         <div>
      //           <h1>Home</h1>
      //         </div>
      //       );
      //     }}
      //   </ProductConsumer>
    );
  }
}

export default Home;
