import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Issues from "./Issues.js";
import Data from "./Components/Data.js";
import Navbar from "./Components/Navbar.js";
import Books from "./Components/Books";

function Dashboard() {
  return (
    <Router>
      <div className="dashboard">
        <Navbar />
        <Switch>
          <Route path="/dashboard" component={Issues} />
          <Route path="/books" component={Books} />
          <Route path="/data/:number" component={Data} />
        </Switch>
      </div>
    </Router>
  );
}

export default Dashboard;
