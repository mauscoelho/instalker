import * as React from "react";
import {
  CircularProgress,
  Grid,
  Paper,
  Typography,
  List
} from "@material-ui/core";
import axios from "axios";

import "./Home.css";
import Login from "../components/Login";
import ToolbarComponent from "../components/Toolbar";
import Viewer, { ViewerModel } from "src/components/Viewer";

const API = process.env.REACT_APP_API;

interface Response {
  me: number;
  notFollowMe: ViewerModel[];
  notFollowMeCount: number;
  viewersCount: number;
  viewers: ViewerModel[];
}

const Loading = () => (
  <Grid item container justify={"center"}>
    <CircularProgress />
  </Grid>
);

const Home = () => {
  const [logged, setLogged] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<Response>({
    me: 0,
    notFollowMe: [],
    viewers: [],
    notFollowMeCount: 0,
    viewersCount: 0
  });

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    const username = event.target.username.value;
    const password = event.target.password.value;
    const payload = {
      username,
      password,
      index: 0
    };

    try {
      const result = await axios.post(`${API}/viewers`, payload);

      const response: Response = result.data;

      setData(response);

      setLoading(false);
      setLogged(true);
    } catch (err) {
      setLoading(false);
    }
  };

  const loadingComponent = loading && !logged ? <Loading /> : null;
  const loginComponent =
    !logged && !loading ? <Login onSubmit={onSubmit} /> : null;

  return (
    <div className="App">
      <ToolbarComponent />
      {loadingComponent}
      {loginComponent}

      {logged && (
        <Grid>
          <Paper>
            <Typography variant="title" gutterBottom>{`Not follow me: ${
              data.notFollowMeCount
            }`}</Typography>
            <List>
              {data.notFollowMe.map(viewer => (
                <Viewer key={viewer.id} viewer={viewer} />
              ))}
            </List>
          </Paper>
          <Paper>
            <Typography variant="title" gutterBottom>{`Follow me: ${
              data.viewersCount
            }`}</Typography>
            <List>
              {data.viewers.map(viewer => (
                <Viewer key={viewer.id} viewer={viewer} />
              ))}
            </List>
          </Paper>
        </Grid>
      )}
    </div>
  );
};

export default Home;
