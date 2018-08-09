import * as React from "react";

import { StyleRulesCallback, withStyles, WithStyles } from "@material-ui/core";
import Login from "../components/Login";
import ToolbarComponent from "../components/Toolbar";
import withRoot from "../withRoot";

const styles: StyleRulesCallback<"root"> = theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center"
  }
});

interface HomeState {
  showLogin: boolean;
  username: string;
  password: string;
}

class Home extends React.Component<WithStyles<typeof styles>, HomeState> {
  public state: HomeState = {
    showLogin: true,
    username: "",
    password: ""
  };

  public render() {
    const { showLogin, username, password } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ToolbarComponent />
        {showLogin && (
          <Login
            username={username}
            password={password}
            onChangeUsername={this.onChangeUsername}
            onChangePassword={this.onChangePassword}
            onSubmit={this.onSubmit}
          />
        )}
      </div>
    );
  }

  private onChangeUsername = (event: any) => {
    this.setState({ username: event.text });
  };

  private onChangePassword = (event: any) => {
    this.setState({ password: event.text });
  };

  private onSubmit = (event: any) => {
    console.log(event);
  };
}

export default withRoot(withStyles(styles)(Home));
