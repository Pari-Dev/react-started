import React, { Component } from "react";
import { render } from "react-dom";
import Parent from "./Parent";
import ProfileInfo from "./ProfileInfo";
import "./style.css";
import { BrowserRouter, Route,Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route component={Parent}/>
      <Route path="/ProfileInfo" component={ProfileInfo}/>
    </Switch>
    </BrowserRouter>
  );
};

render(<App/>, document.getElementById("root"));
