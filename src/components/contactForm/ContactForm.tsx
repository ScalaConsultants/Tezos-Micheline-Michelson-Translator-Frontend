import React from "react";
import { Formik } from "formik";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import FormInput from "../shared/input/FormInput";
import { FormValues, ValidationErrors } from "./types";
import "./ContactForm.scss";
import Alert from "../shared/alert/Alert";
import FormButton from "../shared/formButton/FormButton";

const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const minInputLengths = {
    minNameLength: 3,
    minPhoneNumberLength: 9,
    minEmailAddressLength: 6,
    minContentLength: 20
  };

  const submitForm = async (values: FormValues, { setStatus }) => {
    if (!executeRecaptcha) return;

    setStatus({
      success: true
    });

    const token = await executeRecaptcha("contact_form");
    if (!token.length) return;
  };

  const validate = (values: FormValues) => {
    const errors: ValidationErrors = {};

    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length < minInputLengths.minNameLength) {
      errors.name = "Name is too short";
    }

    if (!values.phone && !values.email) {
      errors.phone = "You need to provide an email or a phone number";
    } else if (
      values.phone &&
      !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/i.test(values.phone)
    ) {
      errors.phone = "It's a wrong phone number!";
    } else if (values.phone.length < minInputLengths.minPhoneNumberLength) {
      errors.phone = "Phone number is to short";
    }

    if (!values.email && !values.phone) {
      errors.email = "You need to provide an email or a phone number";
    } else if (
      (values.email &&
        !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i.test(values.email)) ||
      values.email.length < minInputLengths.minEmailAddressLength
    ) {
      errors.email = "It's a wrong email address!";
    }

    if (!values.content) {
      errors.content = "Required";
    } else if (values.content.length < minInputLengths.minContentLength) {
      errors.content = "Message is to short";
    }

    return errors;
  };

  return (
    <div className="contact-form">
      <h2>Send message</h2>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          email: "",
          content: "",
          isError: null,
          isLoading: false
        }}
        onSubmit={submitForm}
        validate={validate}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          status
        }) => (
          <form onSubmit={handleSubmit} noValidate>
            <div className="contact-form_line">
              <FormInput
                label="Name"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                errors={errors.name}
                touched={touched.name}
                className="contact-form_name"
              />
            </div>
            <div className="contact-form_line">
              <FormInput
                label="Phone"
                type="text"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                errors={errors.phone}
                touched={touched.phone}
              />
              <FormInput
                label="Email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                errors={errors.email}
                touched={touched.email}
              />
            </div>
            <div className="contact-form_line">
              <FormInput
                label="How we can help you?"
                type="text"
                name="content"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
                errors={errors.content}
                touched={touched.content}
                className="contact-form_message"
              />
            </div>
            <FormButton
              label="Submit"
              stylingType="submit"
              type="submit"
              disabled={isSubmitting}
            />
            {status && status.success ? (
              <Alert type="success" message="Message sent." />
            ) : null}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
