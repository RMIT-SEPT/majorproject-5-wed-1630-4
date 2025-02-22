/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
// icon
import Close from "@material-ui/icons/Close";

import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.js";

import image from "assets/img/booking-bg.jpg";

const useStyles = makeStyles(signupPageStyle);

export default function BookingHistoryPage(props, { ...rest }) {
  const classes = useStyles();
  const cancelButton = (key, isActive) => {
    return (
      <Button disabled={isActive} justIcon color={isActive?"gray":"danger"} size="sm"  key={key} onClick={()=>props.handleCancel(key)}>
        <Close />
      </Button>
    );
  };
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
            <GridItem xs={12} sm={10} md={12}>
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle}>  Bookings</h2>
                <CardBody>
                  <GridContainer justify="center">
                      <Table 
                        tableHead={props.tableHead} 
                        tableData={props.tableData.map((v) => {
                          if (v[v.length-1] === "Cancel") {
                            v[v.length-1] = cancelButton(v[0], false);
                          }else if(v[v.length-1] === '') v[v.length-1] = cancelButton(v[0], true);
                          return v
                        })} 
                        tableShopping={true} 
                        hover={true} 
                        striped={true} 
                      />
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
