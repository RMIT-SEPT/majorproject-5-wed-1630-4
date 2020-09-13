import React, { Component } from "react";
import SignupPage from "./SignupPage";
import Api from "utils/api.js";

export default class SignupParent extends Component {
  state = {
    user: { username: "", name: "", password: "", phone: "", address: "" },
    role_id: 0,
    errors: "",
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
    Api.signup(
      {
        name: this.state.user.name,
        username: this.state.user.username,
        password: this.state.user.password,
        phone: this.state.user.phone,
        address: this.state.user.address,
      },
      (res) => {
        console.log(res);
        this.setState({errors: res.errors})
        if(res.errors){
          this.setState({errors: res.errors})
        }else if (res.message=="validation error"){
          this.setState({errors: "all fields are required*"})
        }else{
          this.setState({errors: res.message})
        }
      }
    );
  };
  render() {
    return (
      <div>
        <SignupPage
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
