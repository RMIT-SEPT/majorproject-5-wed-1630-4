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


const useStyles = makeStyles(style);
import image from "assets/img/admin-bg.jpg";
import BookingsParent from "./AdminBookings/BookingsParent";
import EmployeesParent from "./AdminEmployee/EmployeesParent";

export default function AdminPage() {


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


        <NavPills
                color="primary"
                simple
                tabs={[
                  {
                    icon: <WorkIcon/>,
                    // tabButton: "Employees",
                    tabContent: (
                      <EmployeesParent/>
                    )
                  },
                  {
                    // tabButton: "Booking History",
                    icon: <AvTimerIcon/>,
                    tabContent: (
                      <BookingsParent/>
                    )
                  },
                  {
                    // tabButton: "Service",
                    icon: <TouchAppIcon/>,
                    tabContent: (
                      <span>
                        <h4>
                          Service name:
                        </h4>
                        <br />
                        <h5>
                          Service Info:
                        </h5>
                      </span>
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
      {/* </div> */}
    </div>
  );
}
