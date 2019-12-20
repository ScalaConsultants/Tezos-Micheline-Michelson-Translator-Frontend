import React from "react";
import "./ContactInfo.scss";

const ContactInfo = () => (
  <div className="contact-info">
    <h2>Contact info</h2>
    <div className="contact-info_container">
      <img className="contact-info_img" alt="" src="/scalac2.svg" />
      <div className="contact-info_title-container">
        <div className="contact-info_title">
          <h3>Micheline/Michelson Translator</h3>
          <h6>v0.01</h6>
        </div>
      </div>
      <div className="contact-info_value-container">
        <div>
          <p className="contact-info_contact-label">Email us</p>
          <p className="contact-info_contact-label">Call us</p>
        </div>
        <div className="contact-info_value">
          <p className="contact-info_contact">somefunny@email.com</p>
          <p className="contact-info_contact">+48 555 444 777</p>
        </div>
      </div>
    </div>
  </div>
);

export default ContactInfo;
