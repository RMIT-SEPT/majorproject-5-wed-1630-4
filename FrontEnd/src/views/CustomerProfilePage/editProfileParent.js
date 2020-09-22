import React, { Component } from "react";
import CustomerEditProfile from "./CustomerEditProfile";
import Api from "utils/api.js";

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
    Api.editProfile(
      {
        username: this.state.user.username,
        address: this.state.user.address,
        phone: this.state.user.phone,
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
        }else if(res.status==='Updated'){
          this.props.history.push("/customer-profile-edit");

        //else display any remaining message
        }else{
          this.setState({errors: res.message})
        }
      },
      );
    }
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