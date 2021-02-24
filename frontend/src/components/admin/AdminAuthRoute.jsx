import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

//admin
import ControlPanel from "./ControlPanel";
import Users from "./Users";
import Events from "./Events";

export default function AuthRoute(props) {

  if (props.auth.isLoggedIn && props.user.role == 'admin') {
    return (
      <Router>
        <Switch>

          <Route path="/ControlPanel">
            <ControlPanel
              setAuth={props.setAuth}
              auth={props.auth} />
          </Route>

          <Route path="/users">
            <Users
              setAuth={props.setAuth}
              auth={props.auth} />
          </Route>

          <Route path="/events">
            <Events
              setAuth={props.setAuth}
              auth={props.auth} />
          </Route>

        </Switch>
      </Router>

    );
  } else {
    return (
      <Route>
        <Redirect to="/" />
      </Route>
    );
  }
}