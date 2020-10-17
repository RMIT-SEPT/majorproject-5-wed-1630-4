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
import Subject from "@material-ui/icons/Subject";
import Receipt from "@material-ui/icons/Receipt";
import Refresh from "@material-ui/icons/Refresh";



import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.js";

import image from "assets/img/booking-bg.jpg";
import { mrAuto } from "assets/jss/material-kit-pro-react";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(signupPageStyle);

export default function EmployeesPage(props, { ...rest }) {
  const classes = useStyles();
  const [activeRotate, setActiveRotate] = React.useState("");

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
        <div >
          <GridContainer justify="center" >
            <GridItem xs={12} sm={10} md={12} >
            <>
              {props.employees.map((employee, index) =>(
              <Card>
                <CardBody>
                  <GridContainer justify="center"    >
                      <GridItem xs={12} sm={10} md={12} >
                        <h2 className={classes.cardTitle}>{employee.name}</h2>
                      </GridItem>
                      {employee.employeeShifts.map((shift, day_index) => (
                        <GridItem xs={12} sm={4} md={4} lg={4}>
                          <h3><b>{shift.day}</b></h3>
                          <>
                            <GridItem xs={12} sm={10} md={10} lg={10}>
                              <h5>From</h5>
                              <TextField
                                id={index+"-"+day_index+"-"+shift.day+"-"+"fromTime"}
                                type="time"
                                defaultValue={shift.fromTime.slice(0,2)+":"+shift.fromTime.slice(2)}
                                className={classes.textField}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                inputProps={{
                                  onChange: e=>props.handleChange(e),
                                  step: 600,
                                }}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={10} md={10} lg={10}>
                              <h5>To</h5>
                              <TextField
                                id={index+"-"+day_index+"-"+shift.day+"-"+"toTime"}
                                type="time"
                                defaultValue={shift.toTime.slice(0,2)+":"+shift.toTime.slice(2)}
                                className={classes.textField}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                inputProps={{
                                  onChange: e=>props.handleChange(e),

                                  step: 600, 
                                }}
                              />
                            </GridItem>
                          </>

                        </GridItem>
                      ))}
                  </GridContainer>
                  <GridItem xs={12} sm={10} md={12} >
                    <Button round color="success" size="lg" onClick={e=>props.handleSubmit(e)} id={employee.id+"-"+index}>
                      Service details
                    </Button>
                  </GridItem>
                </CardBody>
              </Card>
               ))}
               </>
            </GridItem>
          </GridContainer>
        </div>

      {/* </div> */}
    </div>
  );
}
