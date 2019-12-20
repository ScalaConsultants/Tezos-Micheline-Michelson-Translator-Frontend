import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";
import { useMappedState, useDispatch } from "redux-react-hook";
import * as authTypes from "../../store/authentication/types";
import { IState } from "../../store/global/types";
import FormInput from "../shared/input/FormInput";
import FormButton from "../shared/formButton/FormButton";
import "./Login.scss";

const mapState = (state: IState) => ({
  auth: state.auth,
});

const validationSchema = Yup.object().shape({
  login: Yup.string().required("Login is needed"),
  password: Yup.string().required("Password is needed"),
});

const Login = () => {
  const { auth } = useMappedState(mapState);
  const dispatch = useDispatch();

  const submitForm = (values: authTypes.authCredentials) => {
    dispatch({
      type: authTypes.AUTHENTICATION_LOGIN,
      payload: values,
    });
  };
  const redirectToPanel = () => auth.isLogged && <Redirect to="/admin/library" />;

  return (
    <div className="login">
      <div className="login-content">
        {redirectToPanel()}
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={submitForm}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit} noValidate>
              <FormInput
                label="Login"
                type="text"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                errors={errors.username}
                touched={touched.username}
              />
              <FormInput
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                errors={errors.password}
                touched={touched.password}
              />
              <FormButton
                label="Log in"
                type="submit"
                stylingType="submit"
                onClick={() => submitForm(values)}
                disabled={isSubmitting || !!errors}
              />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
