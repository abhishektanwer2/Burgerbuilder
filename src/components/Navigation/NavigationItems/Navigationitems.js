import React from "react";
import classes from "./Navigationitems.module.css";
import Navigationitem from "../NavigationItems/Navigationitem/Navigationitem.js";
const navigationItems = (props) => (
  <ul className={classes.Navigationitems}>
    <Navigationitem link="/" active>
      Burger Builder
    </Navigationitem>
    <Navigationitem link="/">Checkout</Navigationitem>
  </ul>
);
export default navigationItems;
