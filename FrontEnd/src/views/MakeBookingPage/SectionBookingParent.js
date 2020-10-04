import React, { Component } from "react";
import SectionBookingDatePage from "./Sections/SectionBookingDatePage";
import SectionBookingEmployeePage from "./Sections/SectionBookingEmployeePage";
import SectionBookingServicePage from "./Sections/SectionBookingServicePage";

export default class SectionBookingParent extends Component {
  state = {
    tableHead: ["Booking Number", "Time", "Employee", "Status", "Action"],
    tableData: [],
    isLoading: false,
  };

  componentDidMount() {
    // pull data from backend
    this.setState({
      tableData: [
        ["123", "2/2/2020", "Sam", "Active", ""],
        ["4351", "1/11/2011", "John", "Active", ""],
        ["8942", "2/4/2022", "Mohammed", "Cancelled", ""],
        ["9473", "4/5/2023", "Sam", "Pending", ""],
        ["1234", "2/12/2020", "Sam", "Active", ""],
        ["4355", "1/11/2020", "John", "Active", ""],
        ["1236", "2/20/2010", "Sam", "Active", ""],
        ["4357", "1/11/2021", "John", "Active", ""],
        ["8948", "2/4/2022", "Mohammed", "Cancelled", ""],
        ["9479", "4/5/2023", "Sam", "Pending", ""],
        ["8940", "2/4/2022", "Mohammed", "Cancelled", ""],
        ["12311", "2/10/2020", "Sam", "Active", ""],
        ["43522", "1/11/2021", "John", "Active", ""],
        ["89433", "2/4/2022", "Mohammed", "Cancelled", ""],
        ["94744", "4/5/2023", "Sam", "Pending", ""],
        ["94755", "4/5/2023", "Sam", "Pending", ""],
      ],
    });
  }

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
        <SectionBookingDatePage
          tableHead={this.state.tableHead}
          tableData={this.state.tableData}
          //handleCancel={this.handleCancel}
          //handleDone={this.handleDone}
          handleBook={this.handleBook}
        />
      </div>
    );
  }
}
