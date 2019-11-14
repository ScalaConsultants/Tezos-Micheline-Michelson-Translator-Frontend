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
  name: Yup.string(),
  author: Yup.string(),
  description: Yup.string(),
});

const AddTranslation = ({ setShowModal }: AddTranslationState) => {
  const { translator } = useMappedState(mapState);

  const submitForm = (values: FormValues) => {
    setShowModal(false);
  };

  return (
    <div className="AddTranslation">
      <Formik
        initialValues={{
          name: "",
          author: "",
          description: "",
        }}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} noValidate>
            <div className="add-translation_fields-line">
              <FormInput
                label="Name"
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
              <FormButton label="save" type="submit" onClick={() => submitForm(values)} disabled={isSubmitting} />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddTranslation;
