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


import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.js";
import axios from 'axios'
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import Face from "@material-ui/icons/Face";

const useStyles = makeStyles(signupPageStyle);

//export default function SectionBooking() {
  export default function SectionBookingDate(props, { ...rest }) {
  const classes = useStyles();
  const[bookings, setBooking] = useState([]);
  
/*   const simpleButtons = [
    { color: "info" },
    { color: "success" },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button simple justIcon size="sm" color={prop.color} key={key}>
        <prop.icon />
      </Button>
    );
  }); */



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





  {
    // {booking.time_slot} {booking.service_id} {booking.employee_id} 
    bookings.map(booking=> <li key={booking.id}>
      <label>{booking.id} {booking.time_slot} {booking.service_id} {booking.employee_id}</label>
      <Button round color="primary" size="sm" onClick={() => handleClick(booking.id)}>
        BOOK
      </Button>
      </li>)
  }



  const nowTime = new Date();
  const handleClick = id => {
    };


  // useEffect(()=> {
  //   axios.get('https://jsonplaceholder.typicode.com/users/1/posts')
  //   // axios.get('http://localhost:8080/bookings')
  //       .then(res=>{
  //           console.log(res)
  //           setBooking(res.data)
  //       })
  // },[])

  // 'http://localhost:8080/bookings'

  return (
    //<div className={classNames(classes.aboutDescription, classes.textCenter)}>
    <div>  
    
 


  

    <FormControl fullWidth>
    <Datetime
      timeFormat={false}
      inputProps={{ placeholder: "Select a Date..." }}
    />
  </FormControl>


        <div >
          <GridContainer justify="center">
            <GridItem xs={12} sm={10} md={12}>
                  <GridContainer justify="center">
          <Table
            tableHead={[
              "Booking Number",
              "Date",
              "Time",
              "Employee",
              "Service",
              "Actions"
            ]}
            tableData={[
              ["1", "1/11/2020", "9:00", "Adam", "Haircut", fillButtons],
              ["2", "1/11/2020", "9:30", "Cindy", "Hair Colour", fillButtons],
              ["3", "1/11/2020", "10:00", "Adam", "Haircut", fillButtons],
              ["4", "1/11/2020", "10:30", "Cindy", "Hair Colour", fillButtons],
              ["5", "1/11/2020", "11:00", "Adam", "Haircut", fillButtons]
            ]}
            customCellClasses={[
              classes.textCenter,
              classes.textRight,
              classes.textRight
            ]}
            customClassesForCells={[0, 4, 5]}
            customHeadCellClasses={[
              classes.textCenter,
              classes.textRight,
              classes.textRight
            ]}
            customHeadClassesForCells={[0, 4, 5]}
            tableShopping={true} 
            hover={true} 
            striped={true} 
          />
          </GridContainer>
      </GridItem>
    </GridContainer>
  </div>







    </div>
  );
}
