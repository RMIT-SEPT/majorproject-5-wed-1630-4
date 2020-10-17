import React, { Component } from "react";
import MakeBookingPage from "./MakeBookingPage";

import Api from "utils/api.js";

export default class MakeBookingParent extends Component {
  state = {
    bookingID:0,
    errors: "",
    isLoading: false,
  };

  handleSubmit = (BookingId) => {
    this.setState({ isLoading: true });
    if(false){
    }else{
    Api.makeBooking(
      {
        id: BookingId,
      },
      (res) => {
        console.log(res);
        this.setState({errors: res.errors})

        //retrieve major error message
        if(res.errors){
          this.setState({errors: res.errors})
        }else{
          this.setState({errors: res.message})
        }
      }
    );
    }
  };
  render() {
    return (
      <div>
        <MakeBookingPage
          isLoading={this.state.isLoading}
          errors={this.state.errors}
          handleBooking={this.handleSubmit}
        />
      </div>
    );
  }
}
