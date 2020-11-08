import React from "react";
import Logo from "../../Logo/Logo.js";
import Navigationitems from "../NavigationItems/Navigationitems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";
const sideDrawer = (props) => {
  let attachClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav>
          <Navigationitems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
