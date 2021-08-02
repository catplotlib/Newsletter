import React from "react";
import Home from "./Home";
import Nav from "./Nav";
import Subscribers from "./Subscribers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/subscribers" component={Subscribers} />
      </Switch>
    </Router>
  );
}

export default App;
