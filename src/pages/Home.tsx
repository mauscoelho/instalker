import * as React from "react";
import "./Home.css";

import Login from "../components/Login";
import ToolbarComponent from "../components/Toolbar";

interface HomeState {
  showLogin: boolean;
  username: string;
  password: string;
}

class Home extends React.Component<any, HomeState> {
  public state: HomeState = {
    showLogin: true,
    username: "",
    password: ""
  };

  public render() {
    const { showLogin, username, password } = this.state;
    return (
      <div className="App">
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

export default Home;
