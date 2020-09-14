import React, { Component } from "react";
import LoginPage from "./LoginPageWork";
import Api from "utils/api.js";

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
    
    if(!this.state.user.username|| !this.state.user.password){
      this.setState({errors: "all fields are required*"})
    }else{
    Api.login(
      {
        username: this.state.user.username,
        password: this.state.user.password,
      },
      (res) => {
        console.log(res);

        //retrieve major error message
        if(res.errors){
          this.setState({errors: res.errors})

        //display specific validation error one at a time
        }else if (res.fieldErrors){
          this.setState({errors: res.fieldErrors[0].defaultMessage})

        //when the id is updated, account registration successful
        }else if(!res.token){
          this.setState({errors: "Successful Login"})

        //else display any remaining message
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
