import React from "react";
import "./App.css";
import NavBar from "../components/NavBar";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router basename={process.env.PUBLIC_URL}>
          <NavBar />

          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/Portfolio">
              <Portfolio />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
