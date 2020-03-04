import React from "react";
import "./MenuAppBar.scss";
import { useMappedState } from "redux-react-hook";
import Title from "./Title";
import { IState } from "../../store/global/types";
import { useRouter } from "next/router";

const mapState = (state: IState) => ({
  auth: state.auth
});

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
        <button
          className={router.pathname === "/" && "AppBar__menu-btn--active"}
          type="button"
          onClick={() => goTo("/")}
        >
          {router.pathname === "/" ? (
            <img src="/dashboard.svg" alt="" />
          ) : (
            <img src="/dashboard-red.svg" alt="" />
          )}
          Convert
        </button>
        <button
          className={
            router.pathname === "/contact" && "AppBar__menu-btn--active"
          }
          type="button"
          onClick={() => goTo("/contact")}
        >
          {router.pathname === "/contact" ? (
            <img src="/mail.svg" alt="" />
          ) : (
            <img src="/mail-red.svg" alt="" />
          )}
          Contact
        </button>

        {!auth.isLogged && (
          <button
            className={
              router.pathname === "/login" && "AppBar__menu-btn--active"
            }
            type="button"
            onClick={() => goTo("/login")}
          >
            Login
          </button>
        )}
        {auth.isLogged && (
          <>
            <button
              className={
                router.pathname === "/admin/library" &&
                "AppBar__menu-btn--active"
              }
              type="button"
              onClick={() => goTo("/admin/library")}
            >
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

export default MenuAppBar;
