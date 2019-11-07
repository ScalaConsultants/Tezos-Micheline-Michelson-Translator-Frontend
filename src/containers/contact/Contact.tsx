import React from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import ContactInfo from "../../components/contactInfo/ContactInfo";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Translator</h1>
      <div className="container_full">
        <div className="sub-container_contact-form">
          <ContactForm />
        </div>
        <div className="sub-container_contact-info">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
