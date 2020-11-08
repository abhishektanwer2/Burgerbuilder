import React from "react";
import burgericon from "../../assets/images/133 burger-logo.png";
import classes from "../Logo/Logo.module.css";
const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={burgericon} alt="My burger"></img>
  </div>
);
export default logo;
