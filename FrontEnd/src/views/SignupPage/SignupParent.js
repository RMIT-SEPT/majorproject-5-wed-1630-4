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
    
    if(!this.state.user.name || !this.state.user.username|| !this.state.user.password || !this.state.user.phone || !this.state.user.address){
      this.setState({errors: "all fields are required*"})
    }else{
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

        //retrieve major error message
        if(res.errors){
          this.setState({errors: res.errors})

        //display specific validation error one at a time
        }else if (res.fieldErrors){
          this.setState({errors: res.fieldErrors[0].defaultMessage})

        //when the id is updated, account registration successful
        }else if(res.id!==0){
          this.setState({errors: "Successful Sign in"})

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
