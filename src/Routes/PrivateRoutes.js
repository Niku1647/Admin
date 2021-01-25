import React from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard, NotFound, Visitors } from "../pages";

const PrivateRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/Dashboard" exact component={Dashboard} />
      <Route path="/Visitors" exact component={Visitors} />
      <Route path="/" component={NotFound} />
    </Switch>
  );
};

export default PrivateRoutes;
