// On installe axios pour pouvoir faire des requêtes vers notre server:
// Dans le terminal: npm i axios
// On installe cors:
// Dans le terminal: npm i cors
// On installe et importe react router pour pouvoir naviguer entre les pages
// Dans le terminal: npm i react-router-dom

import React, { useState, useEffect } from "react";
import "./reset.css";
import "./App.css";
import axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

// const cors = require("cors");
// app.use(cors());

import Header from "./components/Header";
import Characters from "./containers/Characters";
import Home from "./containers/Home";
import Comics from "./containers/Comics";
import Favorites from "./containers/Favorites";

function App() {
  return (
    <div className="background">
      <Router>
        <Header />
        <Switch>
          <Route path="/comics/:id">
            <Comics />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
