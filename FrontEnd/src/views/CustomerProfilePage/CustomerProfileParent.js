import React, { Component } from "react";
import CustomerProfilePage from "./CustomerProfilePage";
import Axios from "axios";

export default class CustomerProfileParent extends Component {
  state = {
    user: { name: "", username: "", email: "", address: "", phone: "" },
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

  handleSubmit = () => {
    this.setState({ isLoading: true });
    // eslint-disable-next-line no-unused-vars
    var config = {
      headers: { "Access-Control-Allow-Origin": "*" },
    };
    Axios.post(
      `http://localhost:8080/customerprofile`,
      {
        name: this.state.user.name,
        username: this.state.user.username,
        email: this.state.user.email,
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
        // if (e.response.data.errors) {
        //   this.setState({ errors: e.response.data.errors });
        // }
      });
  };
  render() {
    return (
      <div>
        <CustomerProfilePage
          isLoading={this.state.isLoading}
          errors={this.state.errors}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleRole={this.handleRole}
        />
      </div>
    );
  }
}
