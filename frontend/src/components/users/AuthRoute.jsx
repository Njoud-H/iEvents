import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import AddEvent from "../events/AddEvent";
import EditEvent from "../events/EditEvent";
import MyEvents from "../events/MyEvents";


export default function AuthRoute(props) {
  if (props.auth.isLoggedIn) {
    return (
      <Router>
        <Switch>

          <Route exact path="/MyEvents">
            <MyEvents setSelectEvent={props.setSelectEvent} auth={props.auth} user={props.auth.currentUser} />
          </Route>

          <Route path="/editEvent/:id">
            <EditEvent auth={props.auth} />
          </Route>

          <Route path="/addEvent">
            <AddEvent auth={props.auth} user={props.auth.currentUser} />
          </Route>


        {/*   <Route path="/profile">
            <UserProfile
              setAuth={props.setAuth}
              auth={props.auth} />
          </Route> */}
          

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