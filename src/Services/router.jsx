import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Components/Home/home";
import Selection from "../Components/Selection/selection";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/select/" component={Selection} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
