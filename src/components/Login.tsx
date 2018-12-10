import * as React from "react";
import "./Login.css";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

interface LoginProps {
  onSubmit: (event: any) => void;
}

const Login = (props: LoginProps) => {
  const { onSubmit } = props;
  return (
    <form className={"Container"} onSubmit={onSubmit}>
      <TextField
        id="username"
        label="Username"
        InputLabelProps={{
          shrink: true
        }}
        margin="normal"
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        InputLabelProps={{
          shrink: true
        }}
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit">
        Login
      </Button>
    </form>
  );
};

export default Login;
