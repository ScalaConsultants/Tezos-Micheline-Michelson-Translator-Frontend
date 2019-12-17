import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Routes from "./router/routes";
import MenuAppBar from "./components/menuAppBar/MenuAppBar";

const App = () => {
  const recaptchaSiteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  return (
    <div className="App">
      <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey} language="[optional_language]">
        <Router>
          <MenuAppBar />
          <Routes />
        </Router>
      </GoogleReCaptchaProvider>
    </div>
  );
};

export default App;
