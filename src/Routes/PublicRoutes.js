import React from "react";
import { Route, Switch } from "react-router-dom";
import { ForgetPassword, Login, NotFound } from "../pages";

const PublicRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/Login" exact component={Login} />
      <Route path="/ForgetPassword" exact component={ForgetPassword} />
      <Route path="/" component={NotFound} />
    </Switch>
  );
};

export default PublicRoutes;
