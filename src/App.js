import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import BurgerBuilder from "./containers/BurgerBuider/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
