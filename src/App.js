import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./Dashboard.js";
import Data from "./Components/Data.js";
import Home from "./Home.js";
import { useSelector, useDispatch } from "react-redux";
import { authenticated } from "./actions";
import Books from "./Components/Books";
import "./App.css";

function App() {
  const dispatcher = useDispatch();

  useEffect(() => {
    var x = JSON.parse(localStorage.getItem("id"));
    // console.log(x);
    if (x) {
      if (x.userName && x.password) {
        return dispatcher(authenticated());
      }
    }
  }, []);
  const isLogged = useSelector((state) => state.authenticator);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {isLogged ? <Redirect to="/dashboard" /> : <Home />}
          </Route>
          <Route path="/dashboard">
            {isLogged ? <Dashboard /> : <Redirect to="/" />}
          </Route>
          <Route path="/books" component={Books}>
            {isLogged ? <Books /> : <Redirect to="/dashboard" />}
          </Route>
          <Route path="/data/:number" component={Data}>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
