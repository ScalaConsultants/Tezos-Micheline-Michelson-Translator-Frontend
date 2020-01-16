import React from "react";
import "./Logout.scss";
import LogoutForm from "../../components/logout/Logout";

const Logout = () => {
  return (
    <div className="logout-page">
      <h1>Logout</h1>
      <div className="container_full">
        <div className="sub-container_logout-form">
          <LogoutForm />
        </div>
      </div>
    </div>
  );
};

export default Logout;
