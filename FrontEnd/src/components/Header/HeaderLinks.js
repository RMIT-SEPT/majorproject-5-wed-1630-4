/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons

import Fingerprint from "@material-ui/icons/Fingerprint";
import GroupIcon from '@material-ui/icons/Group';
import HistoryIcon from '@material-ui/icons/History';
import PersonAdd from "@material-ui/icons/PersonAdd";
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";
import API from "utils/api";

const useStyles = makeStyles(styles);

export default function HeaderLinks({...props}) {
  // const buttonsForSpecificRole = () => 

  const [user, setUser] = React.useState("");

  React.useEffect(() => {
    setUser(props.user)
    console.log(user + " inside header");

  }, [props.user]);
  console.log(user)

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };



  // const state = () => {
  //     if (user == "admin") {
  //       console.log("admin is here");
  //       return adminMenu
  //     }else if(user == "customer"){
  //         return customerMenu
  //     } else if(user == "worker"){
  //       return workerMenu
  //     }else if(user == 'visitor'){
  //     return vistorMenu
  //   }
  // }

  

  const { dropdownHoverColor } = props;
  const classes = useStyles();
  let profile ='';
  
  if(localStorage.getItem("token")!==null){
  profile='you are logged in'
  }else{
    profile='logged out'
  }

  const adminMenu = (
    <>
    <ListItem className={classes.listItem}>
      <Button
        href="/admin-dashboard"
        color={window.innerWidth < 960 ? "info" : "white"}
        //target="_blank"
        className={classes.navButton}
        simple
        >
        <HistoryIcon className={classes.icons} /> Admin Panel
      </Button>
   </ListItem>
   <ListItem className={classes.listItem}>
  
  <Button
  href="/admin-profile-page"
  color={window.innerWidth < 960 ? "info" : "white"}
  //target="_blank"
  className={classes.navButton}
  simple
>
  <AccountCircle className={classes.icons} /> Profile
</Button>
      </ListItem>
    <ListItem className={classes.listItem}>
    <Button
        onClick={() => {
          localStorage.removeItem("token")
        window.location.reload(false);
      }}

       color={window.innerWidth < 960 ? "info" : "white"}
       className={classes.navButton}
       simple
       >
       <HistoryIcon className={classes.icons} /> Logout
     </Button>
    </ListItem>
    </>
  );

  const customerMenu = (
    <>
    <ListItem className={classes.listItem}>
      <Button
        href="/search-booking"
        color={window.innerWidth < 960 ? "info" : "white"}
        //target="_blank"
        className={classes.navButton}
        simple
        >
        <HistoryIcon className={classes.icons} /> Booking History
      </Button>
    </ListItem>
    <ListItem className={classes.listItem}>

<Button
href="/customer-profile-page"
color={window.innerWidth < 960 ? "info" : "white"}
//target="_blank"
className={classes.navButton}
simple
>
<AccountCircle className={classes.icons} /> Profile
</Button>
    </ListItem>
    <ListItem className={classes.listItem}>
    <Button
        onClick={() => {
          localStorage.removeItem("token")
        window.location.reload(false);
      }}

       color={window.innerWidth < 960 ? "info" : "white"}
       className={classes.navButton}
       simple
       >
       <HistoryIcon className={classes.icons} /> Logout
     </Button>
    </ListItem>
    </>
  );

  const workerMenu = (
    <>
        <ListItem className={classes.listItem}>
      <Button
        href="/bookings"
        color={window.innerWidth < 960 ? "info" : "white"}
        //target="_blank"
        className={classes.navButton}
        simple
        >
        <HistoryIcon className={classes.icons} /> Employee Panel
      </Button>
    </ListItem>
               <ListItem className={classes.listItem}>
  
  <Button
  href="/employee-profile-page"
  color={window.innerWidth < 960 ? "info" : "white"}
  //target="_blank"
  className={classes.navButton}
  simple
>
  <AccountCircle className={classes.icons} /> Profile
</Button>

    </ListItem>
    <ListItem className={classes.listItem}>
    <Button
        onClick={() => {
          localStorage.removeItem("token")
        window.location.reload(false);
      }}

       color={window.innerWidth < 960 ? "info" : "white"}
       className={classes.navButton}
       simple
       >
       <HistoryIcon className={classes.icons} /> Logout
     </Button>
    </ListItem>
    </>
  );

  const vistorMenu = (
    <>
      <ListItem className={classes.listItem}>
        <Button
          href="/signup-page"
          color={window.innerWidth < 960 ? "info" : "white"}
          //target="_blank"
          className={classes.navButton}
          
          >
          <PersonAdd className={classes.icons} /> create account
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/login-page"
          color={window.innerWidth < 960 ? "info" : "white"}
          //target="_blank"
          className={classes.navButton}
          simple
        >
          <Fingerprint className={classes.icons} /> login page
        </Button>
      </ListItem>
    </>
  );
  return (
    <List className={classes.list + " " + classes.mlAuto}>

        <ListItem className={classes.listItem}>

        <Button
            href="/home"
            color={window.innerWidth < 960 ? "info" : "white"}
            //target="_blank"
            className={classes.navButton}
            simple
          >
          <HomeIcon className={classes.icons} /> home
        </Button>
        </ListItem>

        <ListItem className={classes.listItem}>

          <Button
              href="/booking"
              color={window.innerWidth < 960 ? "info" : "white"}
              //target="_blank"
              className={classes.navButton}
              simple
            >
            <HomeIcon className={classes.icons} /> make booking
          </Button>
          </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/about-us"
          color={window.innerWidth < 960 ? "info" : "white"}
          //target="_blank"
          className={classes.navButton}
          simple
        >
          <GroupIcon className={classes.icons} /> about us
        </Button>
      </ListItem>
      {
        // state()
        user == "visitor" ? vistorMenu:
        (user == "admin"? adminMenu:
        user == "customer"? customerMenu:workerMenu)
      }
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};