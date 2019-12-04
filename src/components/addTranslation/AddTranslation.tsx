import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMappedState } from "redux-react-hook";
import FormTextarea from "../shared/textarea/FormTextarea";
import FormInput from "../shared/input/FormInput";
import { IState } from "../../store/translator/types";
import FormCodeDisplay from "../shared/formCodeDisplay/FormCodeDisplay";
import FormButton from "../shared/formButton/FormButton";
import { AddTranslationState, FormValues } from "./types";
import "./AddTranslation.scss";

const mapState = (state: IState) => ({
  translator: state.translator,
});

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  author: Yup.string(),
  email: Yup.string()
    .required("To get notification the email is needed.")
    .email("It's a wrong email address."),
  description: Yup.string(),
});

const AddTranslation = ({ setShowModal }: AddTranslationState) => {
  const { translator } = useMappedState(mapState);

  const submitForm = (values: FormValues) => {
    setShowModal(false);
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
                errors={errors.title}
                touched={touched.title}
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
              <FormButton label="cancel" type="secondary" onClick={() => setShowModal(false)} />
              <FormButton
                label="save"
                type="submit"
                onClick={() => submitForm(values)}
                disabled={isSubmitting || !!errors}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddTranslation;
