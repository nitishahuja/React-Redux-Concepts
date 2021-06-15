import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Issues from "./Issues";
import Dashboard from "./Dashboard.js";
import Home from "./Home.js";
import { useSelector, useDispatch } from "react-redux";
import { authenticated } from "./actions";
import "./App.css";

function App() {
  const isLogged = useSelector((state) => state.authenticator);
  // const history = useHistory();
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
          {isLogged ? <Redirect to="/dashboard"/> : <Home/>}
          </Route>
          <Route path="/dashboard" >
          {isLogged ? <Dashboard/>: <Redirect to="/"/>}
          </Route>
          <Route path="/issues" component={Issues} >
          {isLogged ? <Issues/>: <Redirect to="/"/>}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
