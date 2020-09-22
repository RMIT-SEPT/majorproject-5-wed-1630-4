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
import SectionBooking from "views/MakeBookingPage/Sections/SectionBooking.js";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";

const useStyles = makeStyles(aboutUsStyle);

export default function MakeBookingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  return (
    <div>
      <Header
        brand="AGME BOOKING SYSTEM"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info"
        }}
      />
      <Parallax image={require("assets/img/bg9.jpg")} filter="dark" small>
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
              <h1 className={classes.title}>Make Booking</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionBooking />
        </div>
      </div>
    </div>
  );
}
