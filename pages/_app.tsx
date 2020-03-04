import App from "next/app";
import { StoreContext } from "redux-react-hook";
import configureStore from "../src/store";
import rootSaga from "../src/store/saga";
import * as React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import MenuAppBar from "../src/components/menuAppBar/MenuAppBar";
import "../src/scss/App.scss";
import * as authenticationTypes from "../src/store/authentication/types";
import "../src/components/shared/alert/Alert.scss";
import "../src/components/shared/formButton/FormButton.scss";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      }
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    const store = configureStore();
    store.runSaga(rootSaga);

    store.dispatch({
      type: authenticationTypes.AUTHENTICATION_CHECK
    });

    const recaptchaSiteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

    return (
      <StoreContext.Provider value={store}>
        <div className="App">
          <GoogleReCaptchaProvider
            reCaptchaKey={recaptchaSiteKey}
            language="[optional_language]"
          >
            <link
              href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap"
              rel="stylesheet"
            />{" "}
            <MenuAppBar />
            <div className="Component">
              <Component {...pageProps} />
            </div>
          </GoogleReCaptchaProvider>
        </div>
      </StoreContext.Provider>
    );
  }
}
