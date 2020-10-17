import React, { Component } from "react";
import EmployeesPage from "./EmployeesPage";
import api from "utils/api";

export default class EmployeesParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeesData: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    // pull data from backend
    api.getEmployees((res) => {
      if (res.data && res.data.length > 0) {
        let employees = res.data.map((emp) => {
          emp.employeeShifts = this.days(emp.employeeShifts);
          return emp;
        });
        this.setState({
          employeesData: employees,
        });
        console.log(this.employeesData);
      }
    });
  }

  days = (shifts) => {
    let completeArr = shifts.map((shift) => {
      return shift;
    });
    let alldays = shifts.map((shift) => {
      return shift.day;
    });
    if (!alldays.includes("Monday")) {
      completeArr.push({ day: "Monday", fromTime: "0000", toTime: "0000" });
    }
    if (!alldays.includes("Tuesday")) {
      completeArr.push({ day: "Tuesday", fromTime: "0000", toTime: "0000" });
    }
    if (!alldays.includes("Wednsday")) {
      completeArr.push({ day: "Wednsday", fromTime: "0000", toTime: "0000" });
    }
    if (!alldays.includes("Thursday")) {
      completeArr.push({ day: "Thursday", fromTime: "0000", toTime: "0000" });
    }
    if (!alldays.includes("Friday")) {
      completeArr.push({ day: "Friday", fromTime: "0000", toTime: "0000" });
    }
    if (!alldays.includes("Saturday")) {
      completeArr.push({ day: "Saturday", fromTime: "0000", toTime: "0000" });
    }
    if (!alldays.includes("Sunday")) {
      completeArr.push({ day: "Sunday", fromTime: "0000", toTime: "0000" });
    }

    const sorter = {
      // "sunday": 0, // << if sunday is first day of week
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
      Sunday: 7,
    };

    completeArr.sort((a, b) => {
      return sorter[a.day] - sorter[b.day];
    });
    return completeArr;
  };

  handleChange = (e) => {
    e.preventDefault();

    let time = e.target.value.split(":").join("");
    let info = e.target.id.split("-");

    this.setState((prev) => {
      let newState = JSON.parse(JSON.stringify(prev));
      newState.employeesData[info[0]].employeeShifts[info[1]][info[3]] = time;
      return { employeesData: newState.employeesData };
    });

    console.log(this.state);
  };

  handleSubmit = (e) => {
    let emp = e.target.id.split("-");
    let index = Number(emp[1]);
    let empID = Number(emp[0]);
    console.log(e.target.id);
    console.log(emp);
    console.log(this.state.employeesData[index]);
    // let workingTimes = this.state.employeesData;
    console.log(index);

    api.addWorkTimes(empID, this.state.employeesData[index], (res) => {
      console.log(res);
      this.setState((prev) => {
        let newState = prev.employeesData;
        let i;
        newState.forEach((emp, index) => {
          if (emp.id == empID) {
            i = index;
            return;
          }
        });
        console.log(i);
        newState[i].employeeShifts = res.data;
        return { employeesData: newState };
      });
    });
    // post shift
  };

  render() {
    return (
      <div>
        {this.state.employeesData.length == 0 ? "You don't have employees for your service":(<EmployeesPage
          employees={this.state.employeesData}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />)}
      </div>
    );
  }
}
