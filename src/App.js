import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import MyTheme from "./config/MyTheme";
import routes from "./config/Routes";
import Layout from "./components/Layout";

function App() {
  return (
    <ThemeProvider theme={MyTheme}>
      <Router>
        <Layout>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </Layout>
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
