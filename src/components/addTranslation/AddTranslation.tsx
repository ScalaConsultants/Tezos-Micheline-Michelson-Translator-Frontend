import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMappedState, useDispatch } from "redux-react-hook";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { IState } from "../../store/global/types";
import * as translatorTypes from "../../store/translator/types";
import * as translatorActions from "../../store/translator/actions";
import FormTextarea from "../shared/textarea/FormTextarea";
import FormInput from "../shared/input/FormInput";
import FormCodeDisplay from "../shared/formCodeDisplay/FormCodeDisplay";
import FormButton from "../shared/formButton/FormButton";
import Alert from "../shared/alert/Alert";
import { AddTranslationState } from "./types";
import "./AddTranslation.scss";
import {bindActionCreators} from "redux";

const mapState = (state: IState) => {
  return {
    translator: state.translator
  };
};

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(3),
  isEmail: Yup.boolean(),
  author: Yup.string().required("Author is required"),
  email: Yup.string()
    .email("It's a wrong email address.")
    .when("isEmail", {
      is: true,
      then: Yup.string().required("To get notification the email is needed."),
      otherwise: Yup.string(),
    }),
  description: Yup.string().required("Description is required."),
});

const AddTranslation = ({ setShowModal }: AddTranslationState) => {
  const { translator } = useMappedState(mapState);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const dispatch = useDispatch();
  const boundTranslatorActions = bindActionCreators(translatorActions, dispatch);

  const submitForm = async (values: any) => {
    if (!executeRecaptcha) return;

    const token = await executeRecaptcha("contact_form");
    if (!token.length) return;

    const sendValues = {
      ...values,
      micheline: translator.micheline,
      michelson: translator.michelson,
    };

    boundTranslatorActions.TranslatorSendTranslation(sendValues, token);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    boundTranslatorActions.TranslatorMessageReset();
  };

  return (
    <div className="add-translation">
      <Formik
        initialValues={{
          title: "",
          author: "",
          isEmail: "",
          email: "",
          description: "",
        }}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} noValidate>
            <div className="add-translation_fields-line">
              <FormInput
                label="Title"
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                // errors={errors.title}
                // touched={touched.title}
              />
              <FormInput
                label="Author"
                type="text"
                name="author"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.author}
                // errors={errors.author}
                // touched={touched.author}
              />
            </div>
            <div className="add-translation_fields-line">
              <FormInput
                label="Email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                // errors={errors.email}
                // touched={touched.email}
                className={!values.isEmail ? "blocked" : "undefined"}
                disabled={!values.isEmail}
              />
              <FormInput
                label="Send me a notification via email"
                type="checkbox"
                name="isEmail"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.isEmail}
                // errors={errors.isEmail}
                // touched={touched.isEmail}
                isValidationDisplay={false}
              />
            </div>
            <FormTextarea
              label="Description"
              placeholder="Fill in the description."
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              // errors={errors.description}
              // touched={touched.description}
            />
            <div className="add-translation_code-displays">
              <FormCodeDisplay value={translator.micheline} type="Micheline" />
              <FormCodeDisplay value={translator.michelson} type="Michelson" />
            </div>
            <div className="add-translation_buttons">
              <FormButton label="close" type="button" stylingType="secondary" onClick={() => {handleCloseModal()}} />
              <FormButton
                label="send"
                type="submit"
                disabled={
                  !!Object.keys(errors).length ||
                  !Object.keys(touched).length ||
                  !translator.micheline ||
                  !translator.michelson ||
                  (!!translator.wasSend && !translator.error)
                }
              />
            </div>
            {!!(translator && translator.wasSend) &&
              (!!translator.error ? (
                <Alert message="Sending message failed. Please, check the form." type="error" />
              ) : (
                <Alert message="Translation was send" type="success" />
              ))}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddTranslation;
