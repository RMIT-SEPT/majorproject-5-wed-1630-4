/*eslint-disable*/
import React from "react";
import Datetime from "react-datetime";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// icon
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";

import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.js";

import image from "assets/img/booking-bg.jpg";

const useStyles = makeStyles(signupPageStyle);

export default function DateBookingsPage(props, { ...rest }) {
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

  return (
    <div>

    <FormControl fullWidth>
    <Datetime
      timeFormat={false}
      inputProps={{ placeholder: "Select a Date..." }}
    />
    </FormControl>

        <div >
          <GridContainer justify="center">
            <GridItem xs={12} sm={10} md={12}>
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
            </GridItem>
          </GridContainer>
        </div>
    </div>
  );
}
