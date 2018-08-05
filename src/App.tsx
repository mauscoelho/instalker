import { createBrowserHistory } from "history";
import * as React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import Login from "./pages/Login";

const history = createBrowserHistory();

class App extends React.Component {
  public render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route
            path={"*"}
            render={() => {
              return <Redirect exact to="/login" />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
