import React, { Component } from "react";
import BookingHistoryPage from "./BookingHistoryPage";

export default class BookingHistoryParent extends Component {
  state = {
    tableHead: [
      "Booking Number",
      "Service",
      "Time",
      "Provider",
      "Status",
      "Action",
    ],
    tableData: [],
    isLoading: false,
  };

  componentDidMount() {
    // pull data from backend
    this.setState({
      tableData: [
        ["123", "Hair Cut", "20/20/2020", "Sam", "Active", ""],
        ["435", "Dev Consultation", "1/11/2021", "John", "Active", ""],
        ["894", "Dental", "2/4/2022", "Mohammed", "Cancelled", ""],
        ["947", "Lecture", "4/5/2023", "Sam", "Pending", "Cancel"],
        ["123", "Hair Cut", "20/20/2020", "Sam", "Active", ""],
        ["435", "Dev Consultation", "1/11/2021", "John", "Active", ""],
        ["123", "Hair Cut", "20/20/2020", "Sam", "Active", ""],
        ["435", "Dev Consultation", "1/11/2021", "John", "Active", ""],
        ["894", "Dental", "2/4/2022", "Mohammed", "Cancelled", ""],
        ["947", "Lecture", "4/5/2023", "Sam", "Pending", "Cancel"],
        ["894", "Dental", "2/4/2022", "Mohammed", "Cancelled", ""],
        ["123", "Hair Cut", "20/20/2020", "Sam", "Active", ""],
        ["435", "Dev Consultation", "1/11/2021", "John", "Active", ""],
        ["894", "Dental", "2/4/2022", "Mohammed", "Cancelled", ""],
        ["947", "Lecture", "4/5/2023", "Sam", "Pending", "Cancel"],
        ["947", "Lecture", "4/5/2023", "Sam", "Pending", "Cancel"],
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

  render() {
    return (
      <div>
        <BookingHistoryPage
          tableHead={this.state.tableHead}
          tableData={this.state.tableData}
          handleCancel={this.handleCancel}
        />
      </div>
    );
  }
}
