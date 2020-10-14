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

  //const [selectedInput, setSelectedInput] = React.useState("1/11/2020");

  const [value, onChange] = React.useState(new Date());

  //const [simpleSelect, setSimpleSelect] = React.useState("");
  
  // const handleSimple = event => {
  //  setSelectedInput(event.target.value);
  // };

  // const handleSimple(date){
  //   this.setState({date});
  // };

  const data = () => {

    var arr3 = []
    props.tableData.forEach((i) => {

         if(i.includes(selectedInput)){
          arr3.push(i)
         }

    })
    console.log(arr3)
    return arr3
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

    <FormControl fullWidth>
    <Datetime
      timeFormat={false}
      dateFormat={'D/M/YYYY'}
      //value={simpleSelect}
      //onChange={handleSimple}
      value={value}
      onChange={onChange}
      closeOnSelect={true}
      inputProps={{ placeholder: "Select a Date...",
      name: "simpleSelect",
      id: "simple-select" }}
    />
    </FormControl>

 
            
                  <GridContainer justify="center">
                      <Table 
                        tableHead={props.tableHead} 
                        tableData={props.tableData.map((v) => {

                            v[v.length-1] = bookButtons(v[0], true);


                          
                          return v
                        })} 
                        tableShopping={true} 
                        hover={true} 
                        striped={true} 
                      />
                  </GridContainer>
            

    </div>
  );
}
