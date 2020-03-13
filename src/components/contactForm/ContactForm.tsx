import React, { useEffect, useState } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import { Formik } from "formik";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import FormInput from "../shared/input/FormInput";
import { FormValues } from "./types";
import "./ContactForm.scss";
import * as MessageTypes from "../../store/message/types";
import * as MessageActions from "../../store/message/actions";
import Alert from "../shared/alert/Alert";
import FormButton from "../shared/formButton/FormButton";
import { removeEmptyProperties } from "../../helpers/tools";
import { bindActionCreators } from "redux";

const mapState = (state: MessageTypes.IMessageGlobalState) => ({
  message: state.message
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const { message } = useMappedState(mapState);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const boundMessageActions = bindActionCreators(MessageActions, dispatch);
  const minInputLengths = {
    minPhoneNumberLength: 9,
    minEmailAddressLength: 6,
    minNameLength: 3
  };
  const [status, setStatus] = useState({success: false});

  const submitForm = async (values: FormValues) => {
    if (!executeRecaptcha) return;

    const token = await executeRecaptcha("contact_form");
    if (!token.length) return;

    const data = removeEmptyProperties(values);

    boundMessageActions.MessageSet(data);
    boundMessageActions.MessageSend(data, token);
    setStatus({success: true});
  };

  useEffect(() => {
    boundMessageActions.MessageSetError(null);
  }, []);

  const saveForm = (values: FormValues) => {
    const data = removeEmptyProperties(values);
    boundMessageActions.MessageSet(data);
  };

  type validationErrors = {
    name?: string;
    phone?: string;
    email?: string;
    content?: string;
  };

  const validate = (values: FormValues) => {
    saveForm(values);

    const errors: validationErrors = {};

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
    }

    return errors;
  };

  return (
    <div className="contact-form">
      <h2>Send message</h2>
      <Formik
        initialValues={{
          name: message.name,
          phone: message.phone,
          email: message.email,
          content: message.content
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
          isSubmitting
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
            {status.success && <Alert type="success" message="Message sent." />}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
