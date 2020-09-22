import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.9.0";

// pages for this product
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import AdminPage from "views/AdminPage/AdminPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import SignupPage from "views/SignupPage/SignupParent.js";
import AdminSignupPage from "views/SignupPage/AdminSignupPage.js";
import HomePage from "views/HomePage/HomePage.js";
import BookingPage from "views/MakeBookingPage/MakeBookingPage.js";
// import BookingHistoryPage from "views/BookingPages/Customer/BookingHistoryPage.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about-us" component={AboutUsPage} />
      {/* <Route path="/contact-us" component={ContactUsPage} /> */}
      <Route path="/login-page" component={LoginPage} />
      {/* <Route path="/profile-page" component={ProfilePage} /> */}
      <Route path="/signup-page" component={SignupPage} />
      <Route path="/booking" component={BookingPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/admin-signup-page" component={AdminSignupPage} />
      {/* <Route path="/booking-history-page" component={BookingHistoryPage} /> */}
      {/* <Route path="/error-page" component={ErrorPage} /> */}
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
