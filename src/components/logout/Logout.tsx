import React, {useEffect} from "react";
import { useDispatch } from "redux-react-hook";
import * as authTypes from "../../store/authentication/types";
import {useRouter} from "next/router";
import "./Logout.scss";

const Logout = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const doLogout = () => {
    dispatch({
      type: authTypes.AUTHENTICATION_LOGOUT,
    });
    return true;
  };

  useEffect(() => {
    doLogout();
  }, [doLogout]);


  // const redirectToHome = () => doLogout() && router.push("/");
  // const redirectToHome = () => doLogout() && router.push("/");

  // return <div className="logout">{redirectToHome()}</div>;
  return <div className="logout">You are logged out.</div>;
};

export default Logout;
