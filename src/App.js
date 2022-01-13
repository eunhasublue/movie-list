import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Switch>
            {routes.map((route) => {
              return (
                <Route key={route.path} path={route.path} exact>
                  <route.component />
                </Route>
              );
            })}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
