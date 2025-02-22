import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.9.0";

// pages for this product
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import LoginPage from "views/LoginPage/LoginParent.js";
import AdminPage from "views/AdminPage/AdminPage.js";
import SignupPage from "views/SignupPage/SignupParent.js";
import AdminSignupPage from "views/SignupPage/AdminSignupPage.js";
import CustomerProfilePage from "views/CustomerProfilePage/CustomerProfilePage.js";
import AdminProfilePage from "views/AdminProfilePage/AdminProfilePage.js";
import EmployeeProfilePage from "views/EmployeeProfilePage/EmployeeProfilePage.js";
import HomePage from "views/HomePage/HomePage.js";
import BookingPage from "views/MakeBookingPage/MakeBookingPage.js";
import SearchBookingPage from "views/SearchBookingPage/SearchBookingPage.js";
import CustomerEditProfile from "views/CustomerProfilePage/EditProfileParent.js";
import BookingHistory from "views/BookingPages/Customer/BookingHistoryParent.js"
import MyBooking from "views/MakeBookingPage/Sections/MyBooking.js"

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/signup-page" component={SignupPage} />
      {/* <Route path="/booking" component={BookingPage} /> */}
      <Route path="/search-booking" component={SearchBookingPage} />
      <Route path="/bookings" component={BookingHistory} />
      <Route path="/home" component={HomePage} />
      <Route path="/admin-signup-page" component={AdminSignupPage} />
      <Route path="/customer-profile-page" component={CustomerProfilePage} />
      <Route path="/customer-profile-edit" component={CustomerEditProfile} />
      <Route path="/admin-profile-page" component={AdminProfilePage} />
      <Route path="/employee-profile-page" component={EmployeeProfilePage} />
      <Route path="/admin-dashboard" component={AdminPage} />
      <Route path="/my-booking" component={MyBooking} />

      <Route path="/" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
