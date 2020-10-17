/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import errorPageStyle from "assets/jss/material-kit-pro-react/views/errorPageStyles.js";
import api from "utils/api"

import image from "assets/img/clint-mckoy.jpg";

const useStyles = makeStyles(errorPageStyle);

export default function HomePage({ ...rest }) {

  const [user, setUser] = React.useState("visitor");
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  
    api.isLoggedIn(res=>{ 
      if (res >= 400) {
        setUser("visitor");
      }else{
      console.log(res.data.role);
      if(res.data.status == "not logged in"){
        setUser("visitor")
      }else if (res.data.status == "logged in"){
        if(res.data.role == "ADMIN"){
          setUser("admin")
        }else if(res.data.role == "CUSTOMER"){
          setUser("customer")
        }else if(res.data.role == "WORKER"){
          setUser("worker")
        }
        console.log(user);
      }
    }
    })
  },[user]);

  const header = () => {return user}
  
    
  const classes = useStyles();
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="AGME"
        links={<HeaderLinks user={header()} dropdownHoverColor="dark" />}
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
        <div className={classes.contentCenter}>
          <GridContainer>
            <GridItem md={12}>
              <h3 className={classes.subTitle}>AGME BOOKING SYSTEM</h3>
              <h4 className={classes.subTitle}>Welcome to AGME booking system</h4>
                <Button
            href="/signup-page"
          color={window.innerWidth < 960 ? "info" : "white"}
          className={classes.navButton}
          
        >
          Sign in
        </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}