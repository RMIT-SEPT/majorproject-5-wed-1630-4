/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Favorite from "@material-ui/icons/Favorite";
import PhoneIcon from '@material-ui/icons/Phone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Warning from "components/Typography/Warning.js"

import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(signupPageStyle);

export default function SignUpPage(props, { ...rest }) {
  const [checked, setChecked] = React.useState([1]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  let errorMessgage = '';

  if (props.errors){
    if (props.errors==="Successful Sign in"){
      errorMessgage = ( 
          <h3 style={{color: 'green'}}>
          {props.errors}
          </h3>
      )
    } else {
      errorMessgage = props.errors
    }
  }
  return (
    <div>

      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle}>Create Account</h2>
                <CardBody>
                  <GridContainer justify="center">
                  <p>
                    {errorMessgage}
                  </p>
                      <form className={classes.form}>
                        <CustomInput
                          id="name"
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                          }}
                          inputProps={{
                            onChange: e=>props.handleChange(e),
                            type: "name",
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Face className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: "Name..."
                          }}
                        />

                        <CustomInput
                          id="username"
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                          }}
                          inputProps={{
                            onChange: e=>props.handleChange(e),
                            type: "username",
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                              <AccountCircleIcon className={classes.inputAdornmentIcon} />

                              </InputAdornment>
                            ),
                            placeholder: "Username..."
                          }}
                        />
                        <CustomInput
                          id="password"
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                          }}
                          inputProps={{
                            onChange: e=>props.handleChange(e),
                            placeholder: "Password...",
                            type: "password",
                            startAdornment: (
                                <InputAdornment position="start">
                                <Icon className={classes.inputIconsColor}>
                                    lock_utline
                                </Icon>
                                </InputAdornment>
                            ),
                            autoComplete: "off"
                        }}
                        />
                        <CustomInput
                          id="phone"
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                          }}
                          inputProps={{
                            onChange: e=>props.handleChange(e),
                            type: "phone",
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                              <PhoneIcon className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: "Phone number..."
                          }}
                        />
                        <CustomInput
                          id="address"
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                          }}
                          inputProps={{
                            onChange: e=>props.handleChange(e),
                            type: "address",
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                              <Icon className={classes.dropdownIcons}>content_paste</Icon>
                              </InputAdornment>
                            ),
                            placeholder: "Address..."
                          }}
                        />
                            <span>
                              <a href="/admin-signup-page">Create admin account?</a>.
                            </span>
                          
                        <div className={classes.textCenter}>
                          <Button round color="primary" size="lg" onClick={props.handleSubmit}>
                            Create Customer Account
                          </Button>

                        </div>
                      </form>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>

      </div>
    </div>
  );
}
