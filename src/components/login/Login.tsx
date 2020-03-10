import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMappedState, useDispatch } from "redux-react-hook";
import { bindActionCreators } from "redux";

import * as authTypes from "../../store/authentication/types";
import * as authActions from "../../store/authentication/actions";
import { IState } from "../../store/global/types";
import FormInput from "../shared/input/FormInput";
import FormButton from "../shared/formButton/FormButton";
import "./Login.scss";

const mapState = (state: IState) => ({
  auth: state.auth
});

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Login is needed"),
  password: Yup.string().required("Password is needed")
});

const Login = () => {
  const { auth } = useMappedState(mapState);
  const dispatch = useDispatch();
  const router = useRouter();
  const boundAuthActions = bindActionCreators(authActions, dispatch);

  const submitForm = (values: authTypes.authCredentials) => {
    boundAuthActions.AuthenticationLogin(values);
  };

  useEffect(() => {
    auth.isLogged && router.push("/admin/library");
  }, [auth.isLogged]);

  return (
    <div className="login">
      <div className="login-content">
        <Formik
          initialValues={{
            username: "",
            password: ""
          }}
          validationSchema={validationSchema}
          onSubmit={submitForm}
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
              <div className="content__bottom-container">
                <FormButton
                  label="Log in"
                  type="submit"
                  disabled={!!Object.keys(errors).length}
                />
                {isSubmitting && !auth.isError && (
                  <div className="error-message">
                    Incorrect login or password
                  </div>
                )}
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
