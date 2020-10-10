import React, { Component } from "react";
import DateBookingsPage from "./DateBookingsPage";

export default class DateBookingsParent extends Component {
  state = {
    tableHead: ["Time", "Date", "Employee", "Service", "Action"],
    tableData: [],
    isLoading: false,
  };

  componentDidMount() {
    // pull data from backend
    this.setState({
      tableData: [
        ["9:00", "1/11/2020", "Cindy", "Haircut", ""],
        ["9:30", "4/11/2020", "John", "Hair Colour", ""],
        ["10:00", "6/11/2020", "Mohammed", "Haircut", ""],
        ["10:30", "9/11/2020", "Cindy", "Hair Colour", ""],
        ["11:00", "10/11/2020", "Cindy", "Hair Wash", ""],
        ["11:30", "12/11/2020", "John", "Haircut", ""],
        ["12:00", "15/11/2020", "Cindy", "Haircut", ""],
        ["12:30", "15/11/2020", "Mohammed", "Hair Colour", ""],
        ["1:00", "16/11/2020", "Cindy", "Hair Wash", ""],
        ["1:30", "17/11/2020", "John", "Haircut", ""],
        ["2:00", "17/11/2020", "Mohammed", "Hair Colour", ""],
        ["2:30", "18/11/2020", "Cindy", "Hair Wash", ""],
        ["3:00", "19/11/2020", "Cindy", "Haircut", ""],
        ["3:30", "19/11/2020", "Mohammed", "Hair Wash", ""],
        ["4:00", "20/11/2020", "John", "Haircut", ""],
        ["4:30", "21/11/2020", "Cindy", "Haircut", ""],
        ["5:00", "22/11/2020", "John", "Hair Colour", ""],
        ["5:30", "23/11/2020", "Mohammed", "Hair Wash", ""],
        ["6:00", "23/11/2020", "John", "Hair Colour", ""],
      ],
    });
  }

  handleCancel = (booking_id) => {
    this.setState({ isLoading: true });
    console.log(booking_id);
    // eslint-disable-next-line no-unused-vars
    // api.cancelBooking();
    this.setState({ isLoading: false });
  };

  handleDone = (booking_id) => {
    this.setState({ isLoading: true });
    console.log(booking_id);
    // eslint-disable-next-line no-unused-vars
    // api.completeBooking();
    this.setState({ isLoading: false });
  };

  render() {
    return (
      <div>
        <DateBookingsPage
          tableHead={this.state.tableHead}
          tableData={this.state.tableData}
          handleCancel={this.handleCancel}
          handleDone={this.handleDone}
        />
      </div>
    );
  }
}
