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
import Check from "@material-ui/icons/Check";

import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.js";

import image from "assets/img/booking-bg.jpg";

const useStyles = makeStyles(signupPageStyle);

export default function BookingsPage(props, { ...rest }) {
  const classes = useStyles();
  const fillButtons = (id, isActive) => ([
    { color: "success", icon: Check },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button disabled={isActive? false:true} 
              justIcon 
              id={id}
              color={(!isActive)?"secondary":(prop.icon == Close)? "danger":"success"} 
              size="sm"  key={key} 
              onClick={()=> (prop.icon == Close)? props.handleCancel(key):props.handleDone(key)}>
        <prop.icon />
      </Button>
    );
  }));

  const nowTime = new Date();
  // const cancelButton = (key, isActive) => {
  //   return (
  //     <Button disabled={isActive} justIcon color={isActive?"secondary":"danger"} size="sm"  key={key} onClick={()=>props.handleCancel(key)}>
  //       <Close />
  //     </Button>
  //   );
  // };
  // const doneButton = (key, isActive) => {
  //   return (
  //     <Button disabled={isActive} justIcon color={isActive?"secondary":"success"} size="sm"  key={key} onClick={()=>props.handleDone(key)}>
  //       <Check />
  //     </Button>
  //   );
  // };
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
                <h2 className={classes.cardTitle}>Bookings on Your Service</h2>
                <CardBody>
                  <GridContainer justify="center">
                      <Table 
                        tableHead={props.tableHead} 
                        tableData={props.tableData.map((v) => {
                          let cellTime = new Date(v[1]);
                          if ( cellTime >= nowTime) {
                            v[v.length-1] = fillButtons(v[0], true);


                          }else if(cellTime.setDate(cellTime.getDate()-7) < nowTime) {
                            // 7 days ago
                            v[v.length-1] = fillButtons(v[0], false);
                          }
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
