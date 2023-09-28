import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./SignupForm.css";

const LoginForm = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibilityToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const getPasswordFieldType = () => {
    return passwordVisible ? "text" : "password";
  };
  const navigateTo = useNavigate();
  const validationSchema = Yup.object({
    username: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain an uppercase letter, a number, and a special character"
      )
      .required("Required"),
  });

  const handleSubmit = (values) => {
    // Handle form submission here, e.g., send data to the server
    navigateTo("/Books");
    console.log("Form data:", values);
  };

  return (
    <div className="signup-form-container">
      <h2>Log In</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="signup-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field
                name="username"
                type="text"
                id="username"
                className={`form-control ${
                  touched.username && errors.username ? "is-invalid" : ""
                }`}
              />
              {touched.username && errors.username && (
                <div className="invalid-feedback">{errors.username}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-group">
                <Field
                  name="password"
                  type={getPasswordFieldType()} // Use the dynamic password type
                  id="password"
                  className={`form-control ${
                    touched.password && errors.password ? "is-invalid" : ""
                  }`}
                />
                <span
                  className="password-toggle"
                  onClick={handlePasswordVisibilityToggle}
                >
                  {passwordVisible ? "🙈" : "👁️"}
                </span>
              </div>
              {touched.password && errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            {/* <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                className={`form-control ${
                  touched.confirmPassword && errors.confirmPassword
                    ? "is-invalid"
                    : ""
                }`}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <div className="invalid-feedback">{errors.confirmPassword}</div>
              )}
            </div> */}
            <button type="submit" className="btn btn-primary">
              LogIn
            </button>
            <button type="button" className="btn btn-secondary">
              Cancel
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
