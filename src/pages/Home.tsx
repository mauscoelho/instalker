import * as React from "react";

import Login from "../components/Login";
import ToolbarComponent from "../components/Toolbar";
import Content from "./Content";
import "./Home.css";

export interface User {
  username: string;
  password: string;
}

const Home = () => {
  const [user, setUser] = React.useState<User | undefined>(undefined);

  const onSubmit = async (event: any) => {
    event.preventDefault();

    const username = event.target.username.value as string;
    const password = event.target.password.value as string;
    setUser({ username, password });
  };

  return (
    <div className="App">
      <ToolbarComponent />
      {!user && <Login onSubmit={onSubmit} />}
      {user && <Content user={user} />}
    </div>
  );
};

export default Home;
