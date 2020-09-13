import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/descriptionStyle.js";
import axios from 'axios'
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionBooking() {
  const classes = useStyles();
  const[bookings, setBooking] = useState([]);

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
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h4 className={classes.description}>
           Welcome To the Booking Page
          </h4>

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
