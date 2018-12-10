import * as React from "react";
import "./Home.css";
import Login from "../components/Login";
import ToolbarComponent from "../components/Toolbar";
import { CircularProgress } from "@material-ui/core";

const API = process.env.REACT_APP_API;

const Home = () => {
  const [logged, setLogged] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();

    setLoading(true);

    const username = event.target.username.value;
    const password = event.target.password.value;
    const data = {
      username,
      password,
      index: 0
    };
    try {
      const result = await fetch(`${API}/helloWorld`, {
        method: "POST",
        body: JSON.stringify(data)
      });

      const response = await result.json();

      console.log(response);

      setLoading(false);
      setLogged(true);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <ToolbarComponent />
      {loading && <CircularProgress />}
      {!logged && <Login onSubmit={onSubmit} />}
    </div>
  );
};

export default Home;
