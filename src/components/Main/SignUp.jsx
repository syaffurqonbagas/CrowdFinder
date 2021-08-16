import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignUp.css";
import Logo from "../../Asset/logo.png";
import PlayStore from "../../Asset/GogglePlayStore.png";
import AppStore from "../../Asset/AppStore.png";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  return (
    <Container>
      <div className="container-signup">
        <Row>
          <Col className="Fullbgimage-left">
            <div className="left">
              <img
                className="Logo mt-5 justify-content-center"
                src={Logo}
                alt="logo"
              />
              <h2>Let’s make your own crowd!</h2>
              <img
                src={PlayStore}
                alt="playstore"
                width="175"
                height="55"
                className="d-inline-block align-top"
              />
              <img
                src={AppStore}
                alt="appstore"
                width="175"
                height="65"
                className="d-inline-block align-top mt-1"
              />
            </div>
          </Col>

          <Col className="Fullbgimage-right justify-content-center">
            <div className="Right d-flex mt-3 justify-content-center">
              <Form>
                <div style={{ height: "30rem", width: "25rem" }}>
                  <Form.Group className="d-flex mt-3 justify-content-center">
                    <h2 className="mt-auto">Sign Up</h2>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group className="mb-5" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group>
                    <Button
                      className="mt-4 width-nokay"
                      variant="primary"
                      type="submit"
                    >
                      REGISTER
                    </Button>
                    <p className="text-center mt-3">
                      Already have an account ?{" "}
                      <Link to="/signin">Sign in</Link>
                    </p>
                  </Form.Group>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SignUp;
