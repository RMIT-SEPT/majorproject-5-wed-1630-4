/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionDescription from "views/AboutUsPage/Sections/SectionDescription.js";

import Fingerprint from "@material-ui/icons/Fingerprint";


import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";
import api from "utils/api";
import history from "utils/history";
import Button from "components/CustomButtons/Button.js";


const useStyles = makeStyles(aboutUsStyle);

export default function AdminPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    // console.log(api.isLoggedIn());
    api.isLoggedIn(res => {
      if (res && res.data.status == "not logged in") {
        // not logged in
        // history.push("/");
      }
    })

  });
  const classes = useStyles();
  return (
    <div>
      <Parallax image={require("assets/img/admin-bg.jpg")} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>Admin Dashboard</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      
      <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
          <div className={classNames(classes.aboutDescription, classes.textCenter)}>
        <GridContainer>
          <GridItem
            md={8}
            sm={8}
            className={classNames(classes.mrAuto, classes.mlAuto)}
          >
        <br></br><br></br><br></br><br></br>

        <Button
          href="/bookings"
          color={window.innerWidth < 960 ? "info" : "primary"}
          className={classes.navButton}
          round
          fullWidth
        >
          <Fingerprint className={classes.icons} /> Bookings on Your Service
        </Button>
        <br></br>
        <Button
          href="/bookings"
          color={window.innerWidth < 960 ? "info" : "primary"}
          className={classes.navButton}
          round
          fullWidth
        >
          <Fingerprint className={classes.icons} /> Add Work Times to Your Employees
        </Button>
          </GridItem>
        </GridContainer>
        <br></br><br></br><br></br><br></br>
      </div>
        </div>
      </div>
    </div>
  );
}
