import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from ".././Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };
  SideDrawerClosedHnadler = () => {
    this.setState({ showSideDrawer: false });
  };
  SideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.SideDrawer,
      };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar DrawertoggleClicked={this.SideDrawerToggleHandler}></Toolbar>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.SideDrawerClosedHnadler}
        />
        <div>backDrop</div>
        <main className={classes.Content}> {this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
