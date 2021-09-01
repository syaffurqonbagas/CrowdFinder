import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Login } from "../../redux/action/user";
import { Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../Asset/logo.png";
import PlayStore from "../../Asset/GogglePlayStore.png";
import AppStore from "../../Asset/AppStore.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signin.css";
import * as yup from "yup";
import { Formik } from "formik";

const Signin = () => {
  const dispatch = useDispatch();
  const { isLoggendIn } = useSelector((state) => state.userData);

  const schema = yup.object().shape({
    email: yup.string()
      .email("Email is invalid")
      .required("This field is required"),
    password: yup.string()
    .required("Enter youre password"),
  });

  if (isLoggendIn) {
    return <Link to="/home" />;
  }

  return (
    <div className="container-Signin">
      <div className="d-flex">
        <div className="Fullbgimage-left w-100">
          <div className="left d-flex align-items-center">
            <div>
              <img
                className="Logo justify-content-center"
                src={Logo}
                alt="logo"
              />
              <h2>Let’s make your own crowd!</h2>

              <img
                src={PlayStore}
                alt="playstore"
                width="175"
                height="60"
                className="d-inline-block"
              />
              <img
                src={AppStore}
                alt="appstore"
                width="175"
                height="62"
                className="d-inline-block marginTop"
              />
            </div>
          </div>
        </div>

        <div className="Signinbg-right justify-content-center w-100">
          <div className="Right-signin d-flex justify-content-center">
            <div className="box-signin my-auto" style={{ width: "25rem" }}>
              <Formik
                validationSchema={schema}
                onSubmit={(values)=>{
                  const {email, password} = values;
                  dispatch(Login(email,password))
                }}
                initialValues={{
                  email: "",
                  password: "",
                }}
              >
                {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  isValid,
                  errors,
                }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <div>
                      <Form.Group className="d-flex mt-3 justify-content-center">
                        <h2 className="mt-auto">Login</h2>
                      </Form.Group>

                      <Form.Group
                        className="mb-3 mx-4"
                        controlId="validataionFOrmik03"
                      >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          name="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="text"
                          value={values.email}
                          isValid={touched.email && !errors.email}
                          isInValid={!!errors.email}
                          placeholder="email@example.com"
                        />
                        {<p style={{color:"red", fontSize:"15px"}}>{errors.email && touched.email && errors.email}</p>}
                      </Form.Group>

                      <Form.Group
                        className="mb-3 mx-4"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          name="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="password"
                          value={values.password}
                          isValid={touched.password && !errors.password}
                          isInValid={!!errors.password}
                          placeholder="Password"
                        />
                        {<p style={{color:"red", fontSize:"15px"}}>{errors.password && touched.password && errors.password}</p>}
                      </Form.Group>

                      <Form.Group>
                        <Col>
                          <button
                            className="button-signin mt-3 width-nokay"
                            type="submit"
                          >
                            Login
                          </button>
                        </Col>
                        <p className="mt-4 text-muted text-center signFoot">
                          don't have an account? <Link to="/">Sign Up</Link>
                        </p>
                      </Form.Group>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
