import { ThemeProvider } from "@material-ui/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React from "react";
import MyTheme from "./config/MyTheme";
import routes from "./config/Routes";
import Layout from "./components/Layout";
import Login from "./pages/Login";

function App() {
  return (
    <ThemeProvider theme={MyTheme}>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Redirect path="/" exact to="/login" />
          <Layout>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </Layout>
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
