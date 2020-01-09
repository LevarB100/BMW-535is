import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../utils/Auth";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  // terinary binder (structure): condition ? (if yes): (if no)
  <Route
    {...rest}
    render={props =>
      Auth.isLoggedIn() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default ProtectedRoute;
