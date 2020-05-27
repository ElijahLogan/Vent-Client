import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NewNote from "./containers/NewNote";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import UnauthenticatedRoute from "./containers/UnauthenticatedRoute";
import AuthenticatedRoute from "./containers/AuthenticatedRoute";

export default function Routes() {
return (
<Switch>
  <UnauthenticatedRoute exact path="/login">
    <Login />
  </UnauthenticatedRoute>
  <UnauthenticatedRoute exact path="/signup">
    <Signup />
  </UnauthenticatedRoute>
  <AuthenticatedRoute exact path="/new-note">
    <NewNote />
  </AuthenticatedRoute>
  <AuthenticatedRoute exact path="/">
    <Home />
  </AuthenticatedRoute>
</Switch>
);
}