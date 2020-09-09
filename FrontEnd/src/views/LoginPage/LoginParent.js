import React, { Component } from "react";
import LoginPage from "./LoginPage";
import Axios from "axios";

export default class LoginParent extends Component {
  state = {
    user: { username: "", password: "" },
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
    Axios.get(
      `http://localhost:8080/login`,
      {
        username: this.state.user.username,
        password: this.state.user.password,
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
        <LoginPage
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