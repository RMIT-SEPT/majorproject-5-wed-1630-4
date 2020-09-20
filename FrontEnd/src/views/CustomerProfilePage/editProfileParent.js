import React, { Component } from "react";
import CustomerEditProfile from "./CustomerEditProfile";
import Axios from "axios";

export default class CustomerProfileParent extends Component {
  state = {
    user: { name: "", username: "",  address: "", phone: "" },
    role_id: 0,
    errors: [],
    isLoading: false,
  };

  handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.id);

    this.setState({
      user: { ...this.state.user, [e.target.id]: e.target.value },
    });
    console.log(this.state);
  };

  handleRole = (e) => {
    this.setState({ role_id: e.target.value });
    console.log(this.state);
  };

  handleUpdate = () => {
    this.setState({ isLoading: true });
    // eslint-disable-next-line no-unused-vars
    var config = {
      headers: { "Access-Control-Allow-Origin": "*" },
    };
    Axios.put(
      `http://localhost:8080/profileEdit`,
      {
        // name: this.state.user.name,
        username: this.state.user.username,
        address: this.state.user.address,
        phone: this.state.user.phone,
      },
      config
    )
      // eslint-disable-next-line no-unused-vars
      .then((r) => {
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 1500);

        console.log(r);
        // history.push("/");
      })
      .catch((e) => {
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 1500);
        console.log(e);
      });
  };
  render() {
    return (
      <div>
        <CustomerEditProfile
          isLoading={this.state.isLoading}
          errors={this.state.errors}
          handleChange={this.handleChange}
          handleUpdate={this.handleUpdate}
          handleRole={this.handleRole}
        />
      </div>
    );
  }
}