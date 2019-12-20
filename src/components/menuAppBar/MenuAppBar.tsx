import React from "react";
import { withRouter } from "react-router-dom";
import "./MenuAppBar.scss";
import Title from "./Title";
import { IState } from "../../store/global/types";
import { useMappedState } from "redux-react-hook";

type Props = {
  history: {
    push: Function;
  };
};

const mapState = (state: IState) => ({
  auth: state.auth,
});

const MenuAppBar = (props: Props) => {
  const { auth } = useMappedState(mapState);

  const goTo = (route: string) => {
    props.history.push(route);
  };

  const goScalac = () => {
    window.open("https://scalac.io", "_blank");
  };

  return (
    <div className="AppBar">
      <button tabIndex={-1} onClick={() => goScalac()} onKeyUp={() => {}}>
        <img className="AppBar__scalac" src="/scalac.svg" alt="https://scalac.io" />
      </button>
      <Title />
      <img
        className="AppBar__scalac-transparent"
        src="/scalac-transparent.svg"
        title="Go to Scalac homepage"
        alt="Go to Scalac homepage"
      />
      <div className="AppBar__menu-btn-container">
        <button type="button" onClick={() => goTo("/")}>
          <img src="/dashboard.svg" alt="" />
          Convert
        </button>
        <button type="button" onClick={() => goTo("/contact")}>
          <img src="/mail.svg" alt="" />
          Contact
        </button>

        {!auth.isLogged && (
          <button type="button" onClick={() => goTo("/login")}>
            Login
          </button>
        )}
        {auth.isLogged && (
          <>
            <button type="button" onClick={() => goTo("/admin/library")}>
              Admin
            </button>
            <button type="button" onClick={() => goTo("/logout")}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default withRouter(MenuAppBar);
