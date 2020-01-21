import React, {useEffect} from "react";
import { useDispatch } from "redux-react-hook";
import * as authActions from "../../store/authentication/actions";
import {useRouter} from "next/router";
import "./Logout.scss";
import {bindActionCreators} from "redux";

const Logout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const boundAuthActions = bindActionCreators(authActions, dispatch);

  const doLogout = () => {
    boundAuthActions.AuthenticationLogout();
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
