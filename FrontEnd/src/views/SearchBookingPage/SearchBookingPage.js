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

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import NavPills from "components/NavPills/NavPills.js";


import WorkIcon from '@material-ui/icons/Work';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import TouchAppIcon from '@material-ui/icons/TouchApp';

import style from "assets/jss/material-kit-pro-react/views/signupPageStyle";
import api from "utils/api";
import history from "utils/history";
import Button from "components/CustomButtons/Button.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

const useStyles = makeStyles(style);
import image from "assets/img/bg9.jpg";
import DateBookingsParent from "./DateBookings/DateBookingsParent";
import EmployeeBookingsParent from "./EmployeeBookings/EmployeeBookingsParent";
import ServiceBookingsParent from "./ServiceBookings/ServiceBookingsParent";

export default function SearchBookingPage({ ...rest }) {


  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    api.isLoggedIn(res => {
      if (res && res.data.status == "not logged in") {
        // not logged in
        // history.push("/");
      }
    })

  });
  const classes = useStyles();
  return (
    <div >

    <Header
    absolute
    color="transparent"
    brand="AGME BOOKING SYSTEM"
    links={<HeaderLinks dropdownHoverColor="rose" />}
    {...rest}
  />

    <div
    className={classes.pageHeader}
    style={{
      backgroundImage: "url(" + image + ")",
      backgroundSize: "cover",
      backgroundPosition: "top center"
    }}
  >
      
      <div className={classes.container} >
        <GridContainer justify="center">
          <GridItem
            md={12}
            sm={12}
            xm={12}
            className={classNames(classes.mrAuto, classes.mlAuto)}
          >
            <Card className={classes.cardSignup}>
              <CardBody>

        <h2 className={classes.cardTitle}>Make a Booking By:</h2>
        <NavPills
                color="primary"
                simple
                tabs={[
                  {
                    //icon: <WorkIcon/>,
                    tabButton: "Date",
                    tabContent: (
                      <DateBookingsParent/>
                    )
                  },
                  {
                    tabButton: "Employee",
                    //icon: <AvTimerIcon/>,
                    tabContent: (
                      <EmployeeBookingsParent/>
                    )
                  },
                  {
                    tabButton: "Service",
                    //icon: <TouchAppIcon/>,
                    tabContent: (
                      <ServiceBookingsParent/>
                    )
                  }
                ]}
              />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <br></br><br></br><br></br><br></br>
      </div>
        </div>
    </div>
  );
}
