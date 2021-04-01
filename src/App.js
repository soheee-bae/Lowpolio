import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/Skills" component={Skills} />
          <Route path="/Project" component={Project} />
          <Route path="/Contact" component={Contact} />
          <Route path="/About" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
