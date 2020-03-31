import React from "react";
import LoginForm from "../../components/login/Login";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <div className="container_full">
        <div className="sub-container_login-form">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
