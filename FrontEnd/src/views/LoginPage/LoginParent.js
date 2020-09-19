import React, { Component } from "react";
import LoginPage from "./LoginPage";
import Api from "utils/api.js";
import Axios from "axios";

export default class LoginParent extends Component {
  state = {
    user: { username: "", password: "" },
    role_id: 0,
    errors: "",
    isLoading: false,
  };

  handleHome() {
    Axios.get("http://localhost:8080/home").then(res => {
      if (res.data.token != null) {
        //if (res.data === "success") {
        this.props.history.push("/home");
      } else {
        alert("Authentication failure");
      }
    })
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
    
    // var config = {
    //   headers: { "Access-Control-Allow-Origin": "*" },
    // };
    Api.login(
     //"http://localhost:8080/login",
      {
        username: this.state.user.username,
        password: this.state.user.password,
        localStorage.setItem("authorization", res.data.token),
        return this.handleHome(),
      },

/* 
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
      } */
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