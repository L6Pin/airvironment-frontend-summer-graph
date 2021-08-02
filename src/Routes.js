import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Averages, AllData } from "./pages";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/averages" component={Averages} />
    <Route path="/all-data" component={AllData} />
  </Switch>
);

export default Routes;
