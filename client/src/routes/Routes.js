import React from "react";
import { Route } from "react-router";
import PrivateRoute from "./PrivateRoute";
import Login from "../components/Login/Login";
import FriendsList from "../components/Friends/FriendsList";

const Routes = () => {
  return (
    <>
      <Route path="/" exact component={Login} />
      <PrivateRoute path="/friends" exact component={FriendsList} />
    </>
  );
};

export default Routes;
