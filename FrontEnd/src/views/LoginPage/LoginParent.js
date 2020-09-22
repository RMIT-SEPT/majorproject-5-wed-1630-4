import React, { Component } from "react";
import LoginPage from "./LoginPage";
import Api from "utils/api.js";

export default class LoginParent extends Component {
  state = {
    user: { username: "", password: "" },
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
    // eslint-disable-next-line no-unused-vars

    this.setState({ isLoading: true });
    if (!this.state.user.username || !this.state.user.password) {
      this.setState({ errors: "all fields are required*" });
    } else {
      Api.login(
        {
          username: this.state.user.username,
          password: this.state.user.password,
        },

        (res) => {
          console.log(res);
          // handleHome();

          //retrieve major error message
          if (res.errors) {
            this.setState({ errors: "incorrect username or password" });

            //when the token is given, login successful
          } else if (res.status === 200) {
            this.setState({ errors: "Sucessful Login" });
            this.props.history.push("/home");

            //else display any remaining message
          } else {
            this.setState({ errors: res.message });
          }
        }
      );
    }
  };

  /*       config
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
  }; */
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
