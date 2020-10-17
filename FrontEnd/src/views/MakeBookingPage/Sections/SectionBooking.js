import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/descriptionStyle.js";
// import axios from 'axios'
import Button from "components/CustomButtons/Button.js";
import Api from "utils/api.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionBooking() {
  const classes = useStyles();
  const[bookings, setBooking] = useState([]);

  const handleClick = id => {
    Api.makeBooking(
      {
        id: id,
      },
      (res) => {
        console.log(res);
        if(res.status == 200)
        alert('successful')
        if(res.errors){
          alert('booking unavilable')
        }else{
        }
      }
    );
  };
  
  const deleteBooking = id => {
    Api.deleteBooking(
      {
        id: id,
      },
      (res) => {
        console.log(res);
        //retrieve major error message
        if(res=='No booking to cancel'){
          alert('No booking to cancel')
        }else{
          alert('Delete Unsucessful')
  
        }
      }
    );
  };

  const BookingButton =(booking)=> {
    if(booking.status=="open"){
      return (
        <Button round color="primary" size="sm" onClick={() => handleClick(booking.id)}>
        Book
        </Button>
      )
    }else{
      return (
        <Button round color="primary" size="sm" onClick={() => deleteBooking(booking.id)}>
        Booked
        </Button>
      )
    }
   
  }
  const displayBooking =(bookings)=>{
    return bookings.map(booking=> <li key={booking.id}>
      <label>{booking.description} {booking.service} {booking.worker} {booking.dateTime} {booking.status}</label>
          {
          BookingButton(booking)
          }
      </li>)
  }

  useEffect(()=> {
    axios.get('http://localhost:8080/bookings/index')
        .then(res=>{
            console.log(res)
            setBooking(res.data)
        })
  },[])
  
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
            displayBooking(bookings)
          }
        </GridItem>
      </GridContainer>
    </div>
  );
}
