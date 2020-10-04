// // /*eslint-disable*/
// import React, { useState, useEffect } from "react";
// // // @material-ui/core components
// // import { makeStyles } from "@material-ui/core/styles";
// // // core components
// // import Header from "components/Header/Header.js";
// // import HeaderLinks from "components/Header/HeaderLinks.js";

// // import errorPageStyle from "assets/jss/material-kit-pro-react/views/errorPageStyles.js";
// import axios from 'axios'
// // import image from "assets/img/clint-mckoy.jpg";

// const useStyles = makeStyles(errorPageStyle);

// export default function MakeBookingPage() {

//   const[bookings, setBooking] = useState[null];

//   useEffect(() => {
// //     // window.scrollTo(0, 0);
// //     // document.body.scrollTop = 0;
//     axios.get('https://jsonplaceholder.typicode.com/users/1/posts')
//     .then(res => {
//       setBooking(res.data)
//     },[])
// //   });
// //   const classes = useStyles();
//   return (
// //       <Header
// //         absolute
// //         color="transparent"
// //         links={<HeaderLinks dropdownHoverColor="dark" />}
// //         {...rest}
// //       />
// //       <div
// //         className={classes.pageHeader}
// //         style={{
// //           backgroundImage: "url(" + image + ")",
// //           backgroundSize: "cover",
// //           backgroundPosition: "top center"
// //         }}
// //       >
// //       <h2>Booking</h2>
// //       {/* {booking && <div>{booking.name.first}</div>} */}
      
//     <div>

//       <ul>
//         {bookings.map(booking => <li key={booking.id}>{booking.title}</li>)}
//       </ul>

//     </div>
//     // </div>

//   );
// }

/*eslint-disable*/
import React, { useState, useEffect } from "react";
//import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBookingDatePage from "views/MakeBookingPage/Sections/SectionBookingDatePage.js";
import SectionBookingEmployeePage from "views/MakeBookingPage/Sections/SectionBookingEmployeePage.js";
import SectionBookingServicePage from "views/MakeBookingPage/Sections/SectionBookingServicePage.js";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import NavPills from "components/NavPills/NavPills.js";
import WorkIcon from '@material-ui/icons/Work';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import style from "assets/jss/material-kit-pro-react/views/signupPageStyle";
import api from "utils/api";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle";

//const useStyles = makeStyles(aboutUsStyle);
const useStyles = makeStyles(style);
import image from "assets/img/bg9.jpg";
import SectionBookingParent from "./SectionBookingParent";
//import EmployeesParent from "./AdminEmployee/EmployeesParent";


export default function MakeBookingPage({ ...rest }) {
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
      {/* </div><div className={classNames(classes.main, classes.mainRaised)}> */}
        <div className={classes.container}>
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
                      <SectionBookingDatePage />
                    )
                  },
                  {
                    tabButton: "Employee",
                    //icon: <AvTimerIcon/>,
                    tabContent: (
                      <SectionBookingEmployeePage />
                    )
                  },
                  {
                    tabButton: "Service",
                    //icon: <TouchAppIcon/>,
                    tabContent: (
                      <SectionBookingServicePage />
                    )
                  }
                ]}
              />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        </div>
      </div>
    </div>
  );
}
