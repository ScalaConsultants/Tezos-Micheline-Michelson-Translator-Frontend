import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMappedState, useDispatch } from "redux-react-hook";
import { IState } from "../../store/global/types";
import * as translatorTypes from "../../store/translator/types";

import FormTextarea from "../shared/textarea/FormTextarea";
import FormInput from "../shared/input/FormInput";
import FormCodeDisplay from "../shared/formCodeDisplay/FormCodeDisplay";
import FormButton from "../shared/formButton/FormButton";
import Alert from "../shared/alert/Alert";
import { AddTranslationState } from "./types";
import "./AddTranslation.scss";

const mapState = (state: IState) => {
  return ({
    translator: state.translator,
    translatorMessage: state.translatorMessage
  })
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Title is required")
    .min(3),
  isEmail: Yup.boolean(),
  author: Yup.string(),
  email: Yup.string().email("It's a wrong email address.").when('isEmail', {
    is: true,
    then: Yup.string().required("To get notification the email is needed."),
    otherwise: Yup.string()
  }),
  description: Yup.string().required("Description is required."),

});

const AddTranslation = ({ setShowModal }: AddTranslationState) => {
  const { translator, translatorMessage } = useMappedState(mapState);

  const dispatch = useDispatch();

  if (!translatorMessage.isTranslationSet) {
    const { micheline, michelson } = { ...translator }
    dispatch({
      type: translatorTypes.TRANSLATOR_SET_TRANSLATION_MESSAGE,
      micheline,
      michelson
    });
  };

  const submitForm = (values: any) => {
    const sendValues = {
      ...values,
      micheline: translatorMessage.micheline || "",
      michelson: translatorMessage.michelson || ""
    };
    dispatch({
      type: translatorTypes.TRANSLATOR_SEND_TRANSLATION,
      payload: sendValues,
    });
  };

  {/* OPT => pure function */}
  const handleCloseModal = () => {
    setShowModal(false);
    dispatch({
      type: translatorTypes.TRANSLATOR_MESSAGE_RESET
    })
  }
  return (
    <div className="add-translation">
      <Formik
        initialValues={{
          name: "",
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
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                errors={errors.name}
                touched={touched.name}
              />
              <FormInput
                label="Author"
                type="text"
                name="author"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.author}
                errors={errors.author}
                touched={touched.author}
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
                errors={errors.email}
                touched={touched.email}
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
                errors={errors.isEmail}
                touched={touched.isEmail}
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
              errors={errors.description}
              touched={touched.description}
            />
            <div className="add-translation_code-displays">
              <FormCodeDisplay value={translator.micheline} type="Micheline" />
              <FormCodeDisplay value={translator.michelson} type="Michelson" />
            </div>
            <div className="add-translation_buttons">
              <FormButton label="cancel" type="secondary" onClick={() => handleCloseModal()} />
              <FormButton
                label="send"
                type="submit"
                onClick={() => { }}
                disabled={ !!Object.keys(errors).length
                  || !Object.keys(touched).length
                  || !translatorMessage.micheline
                  || !translatorMessage.michelson
                  || (!!translatorMessage.wasSend && !translatorMessage.error)
                }
              />
              {/* OPT => zamienic na funkcje ifowanie */}
            </div>
            {!!(translatorMessage && translatorMessage.wasSend) && (
              !!translatorMessage.error
                ? <Alert message="Sending message failed. Please, check the form." type="error" />
                : <Alert message="Translation was send" type="success" />
            )}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddTranslation;
