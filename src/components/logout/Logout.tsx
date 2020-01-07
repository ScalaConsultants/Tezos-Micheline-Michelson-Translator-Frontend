import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "redux-react-hook";
import * as authTypes from "../../store/authentication/types";

const Logout = () => {
  const dispatch = useDispatch();

  const doLogout = () => {
    dispatch({
      type: authTypes.AUTHENTICATION_LOGOUT,
    });
    return true;
  };

  const redirectToHome = () => doLogout() && <Redirect to="/" />;

  return <div className="logout">{redirectToHome()}</div>;
};

export default Logout;
