import React, { useState, useEffect } from "react";
//import React from "react";
import Datetime from "react-datetime";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";



import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.js";
import axios from 'axios'
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import Face from "@material-ui/icons/Face";

const useStyles = makeStyles(signupPageStyle);

//export default function SectionBooking() {
  export default function SectionBookingEmployeePage(props, { ...rest }) {
  const classes = useStyles();
  const[bookings, setBooking] = useState([]);
  const [simpleSelect, setSimpleSelect] = React.useState("");
  const handleSimple = event => {
    setSimpleSelect(event.target.value);
  };
  


  const fillButtons = (id, isActive) => ([
    { color: "success", icon: Check },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button disabled={isActive? false:true} 
              justIcon 
              id={id}
              color={(!isActive)?"secondary":(prop.icon == Close)? "danger":"success"} 
              size="sm"  key={key} 
              onClick={()=> (prop.icon == Close)? props.handleCancel(key):props.handleDone(key)}>
        <prop.icon />
      </Button>
    );
  }));
  const nowTime = new Date();
  const handleClick = id => {
    };


  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/users/1/posts')
    // axios.get('http://localhost:8080/bookings')
        .then(res=>{
            console.log(res)
            setBooking(res.data)
        })
  },[])

  // 'http://localhost:8080/bookings'

  return (
    //<div className={classNames(classes.aboutDescription, classes.textCenter)}>
    <div>  
    
    <GridContainer>
      <GridItem xs={12} sm={10} md={12}>






  <FormControl fullWidth className={classes.selectFormControl}>
    <InputLabel
      htmlFor="simple-select"
      className={classes.selectLabel}
    >
      Select Employee...
    </InputLabel>
    <Select
      MenuProps={{
        className: classes.selectMenu
      }}
      classes={{
        select: classes.select
      }}
      value={simpleSelect}
      onChange={handleSimple}
      inputProps={{
        name: "simpleSelect",
        id: "simple-select"
      }}
    >
      <MenuItem
        disabled
        classes={{
          root: classes.selectMenuItem
        }}
      >
      </MenuItem>
      <MenuItem
        classes={{
          root: classes.selectMenuItem,
          selected: classes.selectMenuItemSelected
        }}
        value="2"
      >
        Employee 1
      </MenuItem>
      <MenuItem
        classes={{
          root: classes.selectMenuItem,
          selected: classes.selectMenuItemSelected
        }}
        value="3"
      >
        Employee 2
      </MenuItem>
      <MenuItem
        classes={{
          root: classes.selectMenuItem,
          selected: classes.selectMenuItemSelected
        }}
        value="4"
      >
        Employee 3
      </MenuItem>
    </Select>
  </FormControl>







         {
          // {booking.time_slot} {booking.service_id} {booking.employee_id} 
          bookings.map(booking=> <li key={booking.id}>
            <label>{booking.id} {booking.time_slot} {booking.service_id} {booking.employee_id}</label>
            <Button round color="primary" size="sm" onClick={() => handleClick(booking.id)}>
              BOOK
            </Button>
            </li>)
        }
        

        </GridItem>
      </GridContainer>
    </div>
  );
}
