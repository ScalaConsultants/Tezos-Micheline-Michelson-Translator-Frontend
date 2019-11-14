import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import FormInput from "../shared/input/FormInput";
import FormButton from "../shared/formButton/FormButton";
import { setLoginToken } from "./sessionHandler";
import { useMappedState, useDispatch } from "redux-react-hook";
import * as authTypes from "../../store/authentication/types";
import "./Login.scss";
import { Redirect } from "react-router-dom";
import { IState, FormValues } from "./types";

const mapState = (state: IState) => ({
  auth: state.auth,
});

const validationSchema = Yup.object().shape({
  login: Yup.string(),
  password: Yup.string(),
});

const setLoggedIn = (dispatch: Function, value: boolean) => {
  dispatch({
    type: authTypes.AUTHENTICATION_SET_AUTH,
    payload: value,
  });
};

const Login = () => {
  const { auth } = useMappedState(mapState);
  const dispatch = useDispatch();

  const submitForm = (values: FormValues) => {
    //if call to backend is succesfull, we should get a token to store in the localStorage
    const token = "";
    setLoginToken(token);
    //if call to backend is succesfull, we set state to logged in or not
    const loginSuccess = true;
    setLoggedIn(dispatch, loginSuccess);
  };

  const redirectToPanel = () => {
    if (auth.loggedIn) {
      return <Redirect to="/admin/library" />;
    }
  };

  return (
    <div className="login">
      {redirectToPanel()}
      <div className="login-content">
        <Formik
          initialValues={{
            login: "",
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
                name="login"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.login}
                errors={errors.login}
                touched={touched.login}
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
              <FormButton type="submit" label="Log in" onClick={() => submitForm(values)} />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
