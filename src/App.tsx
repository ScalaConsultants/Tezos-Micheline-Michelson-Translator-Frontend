import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Routes from "./router/routes";
import MenuAppBar from "./components/menuAppBar/MenuAppBar";

const App = () => {
  return (
    <div className="App">
      <Router>
        <MenuAppBar />
        <Routes />
      </Router>
    </div>
  );
};

export default App;
