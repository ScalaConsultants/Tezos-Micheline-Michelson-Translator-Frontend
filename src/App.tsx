import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import Routes from "./router/routes";
import MenuAppBar from "./components/menuAppBar/MenuAppBar";
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./theme/theme";
import ReactGA from 'react-ga';

// Initializing Google Analytics
ReactGA.initialize('UA-47834691-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <MenuAppBar />
          <Routes />
        </Router>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
