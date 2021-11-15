import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//Views
import Home from "./Pages/Home";
import Followers from "./Pages/Followers";
import Repos from "./Pages/Repos";

function App() {
  //JSX

  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/followers/:user" exact>
            <Followers />
          </Route>

          <Route path="/repositories/:user" exact>
            <Repos />
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
