import React, { Component} from 'react';
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

export default class SectionBookingComponent extends Component {
    // state = {
    //     bookings: [{}],
    //     isLoading: false,
    //   };
    

    handleClick = (id) => {
        Api.makeBooking(
            {
            id: id,
            },
            (res) => {
                console.log(res);
                //retrieve major error message
                if(res.errors){
                    this.setState({errors: res.errors})
                }else{
                    this.setState({errors: res.message})
                }
            }
        );
    };

    displayBooking = () => {
        axios.get('http://localhost:8080/bookings/index')
        .then(res=>{
            console.log(res)
            this.setState({bookings: res.data });
        })
      return this.state.bookings.map(booking=> <li key={booking.id}>
        <label>{booking.description} {booking.service} {booking.worker} {booking.dateTime} {booking.status}</label>
        <Button round color="primary" size="sm" onClick={this.handleClick(booking.id)}>
          BOOK
        </Button>
        </li>)
    }
    

    render() { 
  return (
      <GridContainer>
          <h4>
           Welcome To the Booking Page
          </h4>
            {
                this.displayBooking()
            }
      </GridContainer>
  );
}
}