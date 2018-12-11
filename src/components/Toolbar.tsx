import * as React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class ToolbarComponent extends React.Component {
  public render() {
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Story Filter
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default ToolbarComponent;
