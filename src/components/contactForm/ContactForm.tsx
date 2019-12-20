import React, { useEffect } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import { Formik } from "formik";
import * as Yup from "yup";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import FormInput from "../shared/input/FormInput";
import { FormValues } from "./types";
import "./ContactForm.scss";
import * as MessageTypes from "../../store/message/types";
import Alert from "../shared/alert/Alert";
import FormButton from "../shared/formButton/FormButton";

const validationSchema = Yup.object().shape({
  name: Yup.string(),
  group: Yup.string(),
  phone: Yup.number()
    .integer("It's a wrong phone number!")
    .min(8, "This phone number is too short."),
  email: Yup.string()
    .required("Email is required.")
    .email("It's a wrong email address."),
  content: Yup.string()
    .required("Message is required.")
    .min(10, "Message is too short."),
});

const mapState = (state: MessageTypes.IMessageGlobalState) => ({
  message: state.message,
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const { message } = useMappedState(mapState);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const submitForm = async (values: FormValues) => {
    if (!executeRecaptcha) return;

    const token = await executeRecaptcha("contact_form");
    if (!token.length) return;

    dispatch({
      type: MessageTypes.MESSAGE_SET,
      message: values,
    });

    dispatch({
      type: MessageTypes.MESSAGE_SEND,
      message: values,
      captcha: token,
    });
  };

  useEffect(() => {
    dispatch({
      type: MessageTypes.MESSAGE_SET_ERROR,
      isError: null,
    });
  }, [dispatch]);

  const saveForm = (values: FormValues) => {
    dispatch({
      type: MessageTypes.MESSAGE_SET,
      message: values,
    });
  };

  return (
    <div className="contact-form">
      <h2>Send message</h2>
      <Formik
        initialValues={{
          name: message.name,
          phone: message.phone,
          email: message.email,
          content: message.content,
        }}
        validationSchema={validationSchema}
        onSubmit={submitForm}
        validate={saveForm}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
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
            <FormButton label="Submit" stylingType="submit" type="submit" disabled={isSubmitting} />
            {message.isError === false ? <Alert type="success" message="Message sent." /> : null}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
