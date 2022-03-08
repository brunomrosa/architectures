import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "../pages/Home";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact title="Home" path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
