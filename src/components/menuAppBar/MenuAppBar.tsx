import React from "react";
import "./MenuAppBar.scss";
import { useMappedState } from "redux-react-hook";
import Title from "./Title";
import { IState } from "../../store/global/types";
import NavButton from "./NavButton";

const mapState = (state: IState) => ({
  auth: state.auth
});

const routes = {
  home: "/",
  contact: "/contact",
  login: "/login",
  admin: "/admin/library",
  logout: "/logout"
};

const MenuAppBar = () => {
  const { auth } = useMappedState(mapState);

  const goScalac = () => {
    window.open("https://scalac.io", "_blank");
  };

  return (
    <div className="AppBar">
      <a tabIndex={-1} onClick={() => goScalac()} onKeyUp={() => {}}>
        <img
          className="AppBar__scalac"
          src="/scalacLogo.svg"
          alt="https://scalac.io"
        />
      </a>
      <Title />
      <img
        className="AppBar__scalac-transparent"
        src="/scalac-transparent.svg"
        title="Go to Scalac homepage"
        alt="Go to Scalac homepage"
      />
      <div className="AppBar__menu-btn-container">
        <NavButton
          name={"Convert"}
          route={routes.home}
          activeIcon={"/dashboard.svg"}
          inActiveIcon={"/dashboard-red.svg"}
        />
        <NavButton
          name={"Contact"}
          route={routes.contact}
          activeIcon={"/mail.svg"}
          inActiveIcon={"/mail-red.svg"}
        />
        {!auth.isLogged && <NavButton name={"Login"} route={routes.login} />}
        {auth.isLogged && (
          <>
            <NavButton name={"Admin"} route={routes.admin} />
            <NavButton name={"Logout"} route={routes.logout} />
          </>
        )}
      </div>
    </div>
  );
};

export default MenuAppBar;
