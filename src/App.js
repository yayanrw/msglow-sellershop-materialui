import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import MyTheme from "./config/MyTheme";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "./config/Routes";

function App() {
  return (
    <ThemeProvider theme={MyTheme}>
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default App;
