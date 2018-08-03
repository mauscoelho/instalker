import * as React from "react";
import "./App.css";

import logo from "./logo.svg";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Story viewer for Instagram</h1>
        </header>
        <p className="App-intro">
          React application to improve the way that you see your story viewers
        </p>
      </div>
    );
  }
}

export default App;
