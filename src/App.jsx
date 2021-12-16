import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { NotFound } from "./pages/NotFound";
import { PopularPage } from "./pages/PopularPage";
import { RevenuePage } from "./pages/RevenuePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/popular" component={PopularPage} />
        <Route path="/revenue" component={RevenuePage} />
        <Route path="/" exact component={MainPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
