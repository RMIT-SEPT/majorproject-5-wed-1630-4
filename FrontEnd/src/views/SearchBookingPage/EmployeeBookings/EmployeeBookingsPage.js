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
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
// icon
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";

import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.js";

import image from "assets/img/booking-bg.jpg";
import { array } from "prop-types";

const useStyles = makeStyles(signupPageStyle);

export default function EmployeeBookingsPage(props, { ...rest }) {
  const classes = useStyles();

  const [selectedInput, setSelectedInput] = React.useState("Sam");

  const [simpleSelect, setSimpleSelect] = React.useState("");
  const handleSimple = event => {
    setSelectedInput(event.target.value);
    
    //alert('Selected is: ' + simpleSelect);
    // setSelectedInput(simpleSelect);
    //event.preventDefault();
  };

  const data = () => {

    var arr1 = []
    props.tableData.forEach((i) => {

         if(i.includes(selectedInput)){
          arr1.push(i)
         }

    })
    console.log(arr1)
    return arr1
  }

  const bookButtons = (id, isActive) => ([
    { color: "success", icon: Check },

  ].map((prop, key) => {
    return (
      <Button round color="primary" size="sm">
        BOOK
      </Button>
    );
  }));

  // const fillButtons = (id, isActive) => ([
  //   { color: "success", icon: Check },
  //   { color: "danger", icon: Close }
  // ].map((prop, key) => {
  //   return (
  //     <Button disabled={isActive? false:true} 
  //             justIcon 
  //             id={id}
  //             color={(!isActive)?"secondary":(prop.icon == Close)? "danger":"success"} 
  //             size="sm"  key={key} 
  //             onClick={()=> (prop.icon == Close)? props.handleCancel(key):props.handleDone(key)}>
  //       <prop.icon />
  //     </Button>
  //   );
  // }));

  const nowTime = new Date();

  return (
    <div>
        <div >
          <GridContainer justify="center">
            <GridItem xs={12} sm={10} md={12}>

            <FormControl fullWidth className={classes.selectFormControl}>
            <InputLabel
              htmlFor="simple-select"
              className={classes.selectLabel}
            >
              Select Employee...
            </InputLabel>
            <Select
              MenuProps={{
                className: classes.selectMenu
              }}
              classes={{
                select: classes.select
              }}
              value={simpleSelect}
              onChange={handleSimple}
              //onChange={this.onChange}
              inputProps={{
                name: "simpleSelect",
                id: "simple-select"
              }}
            >
              <MenuItem
                disabled
                classes={{
                  root: classes.selectMenuItem
                }}
              >
              </MenuItem>
              <MenuItem
                classes={{
                  root: classes.selectMenuItem,
                  selected: classes.selectMenuItemSelected
                }}
                value="John"
              >
                John
              </MenuItem>
              <MenuItem
                classes={{
                  root: classes.selectMenuItem,
                  selected: classes.selectMenuItemSelected
                }}
                value="Mohammed"
              >
                Mohammed
              </MenuItem>
              <MenuItem
                classes={{
                  root: classes.selectMenuItem,
                  selected: classes.selectMenuItemSelected
                }}
                value="Cindy"
              >
                Cindy
              </MenuItem>
            </Select>

  
          </FormControl>

                  <GridContainer justify="center">
                      <Table 
                        tableHead={props.tableHead} 
                        tableData={data()} 
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
