import React from "react";
import { Route } from "react-router";
import PrivateRoute from "./PrivateRoute";
import Login from "../components/Login";

const Routes = () => {
  return (
    <>
      <Route path="/" exact component={Login} />
    </>
  );
};

export default Routes;
