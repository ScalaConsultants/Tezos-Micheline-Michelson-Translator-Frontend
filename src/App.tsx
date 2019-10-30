import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import Routes from "./router/routes";
import MenuAppBar from "./components/menuAppBar/MenuAppBar";
import ReactGA from 'react-ga';

// Initializing Google Analytics
ReactGA.initialize('UA-47834691-1');
ReactGA.pageview(window.location.pathname + window.location.search);

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
