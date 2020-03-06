import React from "react";
import "./MenuAppBar.scss";
import { useMappedState } from "redux-react-hook";
import Title from "./Title";
import { IState } from "../../store/global/types";
import { useRouter } from "next/router";
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
  const router = useRouter();

  const goTo = (route: string) => {
    router.push(route);
  };

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
          goTo={() => goTo(routes.home)}
          route={routes.home}
          activeIcon={"/dashboard.svg"}
          inActiveIcon={"/dashboard-red.svg"}
        />
        <NavButton
          name={"Contact"}
          goTo={() => goTo(routes.contact)}
          route={routes.contact}
          activeIcon={"/mail.svg"}
          inActiveIcon={"/mail-red.svg"}
        />
        {!auth.isLogged && (
          <NavButton
            name={"Login"}
            goTo={() => goTo(routes.login)}
            route={routes.login}
          />
        )}
        {auth.isLogged && (
          <>
            <NavButton
              name={"Admin"}
              goTo={() => goTo(routes.admin)}
              route={routes.admin}
            />
            <NavButton
              name={"Logout"}
              goTo={() => goTo(routes.logout)}
              route={routes.logout}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default MenuAppBar;
