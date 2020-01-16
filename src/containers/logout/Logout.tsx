import React from "react";
import "./Logout.scss";
import LogoutForm from "../../components/logout/Logout";

const Logout = () => {
  return (
    <div className="login-page">
      <h1>Logout</h1>
      <div className="container_full">
        <div className="sub-container_login-form">
          <LogoutForm />
        </div>
      </div>
    </div>
  );
};

export default Logout;
