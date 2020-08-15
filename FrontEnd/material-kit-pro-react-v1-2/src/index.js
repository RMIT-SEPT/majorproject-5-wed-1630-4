/*!

=========================================================
* Material Kit PRO React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.9.0";

// pages for this product
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import SignupPage from "views/SignupPage/SignupPage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js";
import AdminSignupPage from "views/SignupPage/AdminSignupPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {/* <Route path="/about-us" component={AboutUsPage} /> */}
      {/* <Route path="/contact-us" component={ContactUsPage} /> */}
      <Route path="/login-page" component={LoginPage} />
      {/* <Route path="/profile-page" component={ProfilePage} /> */}
      <Route path="/signup-page" component={SignupPage} />
      <Route path="/admin-signup-page" component={AdminSignupPage} />
      <Route path="/error-page" component={ErrorPage} />
      <Route path="/" component={SignupPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
