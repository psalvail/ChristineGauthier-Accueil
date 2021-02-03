import "./App.css";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Accueil from "./components/Accueil";
import Properties from "./components/Properties";
import Purchases from "./components/Purchases";
import Sales from "./components/Sales";
import Teams from "./components/Teams";
import Blogue from "./components/Blogue";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Accueil} />
        <Route path="/properties" component={Properties} />
        <Route path="/purchases" component={Purchases} />
        <Route path="/sales" component={Sales} />
        <Route path="/teams" component={Teams} />
        <Route path="/blogue" component={Blogue} />
        <Route path="/contactus" component={ContactUs} />
      </Switch>
    </Router>
  );
}

export default App;
