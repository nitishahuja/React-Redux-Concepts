import React from "react";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Issues from "./Issues.js";
import Data from "./Data.js";
import Navbar from "./Components/Navbar.js";
import { useSelector, useDispatch } from "react-redux";
import { authenticated } from "./actions";

function Dashboard() {
  const isLogged = useSelector((state) => state.authenticator);
  return (
    <Router>
      <div className="dashboard">
        <Navbar />
        <Switch>
          <Route path="/dashboard" component={Issues} />
          <Route path="/data/:number"  component={Data}/>
        </Switch>
      </div>
    </Router>
  );
}

export default Dashboard;
