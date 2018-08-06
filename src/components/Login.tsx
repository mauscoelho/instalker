import * as React from "react";
import "./Login.css";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

interface LoginProps {
  username: string;
  password: string;
  onChangeUsername: any;
  onChangePassword: any;
  onSubmit: any;
}

class Login extends React.Component<LoginProps> {
  public render() {
    const {
      username,
      password,
      onChangePassword,
      onChangeUsername,
      onSubmit
    } = this.props;
    return (
      <div className={"Container"}>
        <TextField
          id="username"
          label="Username"
          value={username}
          onChange={onChangeUsername}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={onChangePassword}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Login
        </Button>
      </div>
    );
  }
}

export default Login;
