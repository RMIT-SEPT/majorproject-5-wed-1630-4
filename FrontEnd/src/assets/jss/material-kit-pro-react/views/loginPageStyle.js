import {
  container,
  description,
  cardTitle,
  blackColor,
  whiteColor,
  main,
  mainRaised,
  grayColor,
  hexToRgb
} from "assets/jss/material-kit-pro-react.js";

const signupPageStyle = theme => ({
  description,
  cardTitle: {
    ...cardTitle,
    color: whiteColor + "  !important"
  },
  container: {
    ...container,
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px"
    }
  },
  pageHeader: {
    color: whiteColor,
    border: "0",
    height: "100%",
    margin: "0",
    display: "flex!important",
    padding: "120px 0",
    position: "relative",
    minHeight: "100vh",
    alignItems: "center",
    "&:before": {
      background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    }
  },
  form: {
    margin: "0",
    //BELOW FOR THIS FORM{} COPIED FROM SIGNUPPAGESTYLE
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 6px 30px 5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2);",
    //marginBottom: "100px",
    padding: "40px 0px"
  },
  cardHeader: {
    width: "auto",
    textAlign: "center"
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  inputIconsColor: {
    color: grayColor[13]
  },
  //ADDED FROM SIGNUPPAGESTYLE.JS
  cardTitle: {
    ...cardTitle,
    textDecoration: "none",
    textAlign: "center !important",
    marginBottom: "0.75rem"
  },
  textCenter: {
    textAlign: "center"
  },
  iconButtons: {
    marginRight: "3px !important",
    marginLeft: "3px !important"
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  left: {
    float: "left!important",
    display: "block",
    "&,& *,& *:hover,& *:focus": {
      color: whiteColor + "  !important"
    }
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right",
    "&,& *,& *:hover,& *:focus": {
      color: whiteColor + "  !important"
    }
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  },
  footer: {
    position: "absolute",
    width: "100%",
    background: "transparent",
    bottom: "0",
    color: whiteColor,
    zIndex: "2"
  }
});

export default signupPageStyle;
