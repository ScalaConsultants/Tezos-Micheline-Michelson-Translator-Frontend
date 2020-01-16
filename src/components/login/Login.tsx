import React, {useEffect} from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";
import { useMappedState, useDispatch } from "redux-react-hook";
import * as authTypes from "../../store/authentication/types";
import { IState } from "../../store/global/types";
import FormInput from "../shared/input/FormInput";
import FormButton from "../shared/formButton/FormButton";
import "./Login.scss";
import {useRouter} from "next/router";

const mapState = (state: IState) => ({
  auth: state.auth,
});

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Login is needed"),
  password: Yup.string().required("Password is needed"),
});

const Login = () => {
  const { auth } = useMappedState(mapState);
  const dispatch = useDispatch();
  const router = useRouter();

  const submitForm = (values: authTypes.authCredentials) => {
    dispatch({
      type: authTypes.AUTHENTICATION_LOGIN,
      payload: values,
    });
  };

  // const redirectToPanel = () => auth.isLogged && router.push("/admin/library");

  useEffect(() => {
    auth.isLogged && router.push("/admin/library")
  }, [auth.isLogged]);


  return (
    <div className="login">
      <div className="login-content">
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={submitForm}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, isValid }) => (
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
              <FormButton label="Log in" type="submit" disabled={!!Object.keys(errors).length} />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
