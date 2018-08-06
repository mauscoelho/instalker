import { createBrowserHistory } from "history";
import * as React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import Home from "./pages/Home";

const history = createBrowserHistory();

class App extends React.Component {
  public render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route
            path={"*"}
            render={() => {
              return <Redirect exact to="/home" />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
