import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {Link} from "react-router-dom"

const ChooseInterest = (props) => {
  return (
    <Container>
      <div className="mt-3 justify-content-center">
        <h3>What topic are you interesting in?</h3>
        <p>
          There a lot of people and community waiting you! Let's be part of them
        </p>
        <p>
          We will find you the communities and pople which fit with your
          interesting topics. So let's find them
        </p>
        <Row>
          {/* {Coll 1} */}
          <Col>
            <div className="Cekbox">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                  Design
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                  Automotive
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                  Culture and Language
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                  Business
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                  Politics
                </label>
              </div>
            </div>
          </Col>
          {/* {Col 2} */}

          <Col>
            <div className="Cekbox">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                  Food and Beverage
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                  Tourism
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                  Tech
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                  Bike
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                  Fashion
                </label>
              </div>
            </div>
          </Col>
          {/* {Coll 3} */}

          <Col>
            <div className="Cekbox">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                  Science
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                  Flora and Fauna
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                  Psycology
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                  Finance
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                  Social
                </label>
              </div>
            </div>
          </Col>
        </Row>
        <div className="justify-content-center">
        <div className="">
          <p>You can choose as much as you want</p>
          <div className="d-flex justify-content-start">
            <Button className="button" onClick={props.onClick} style={{ width: "10rem" }}>
              Prev
            </Button>
          </div>
           <div className="d-flex justify-content-end">
             <Link to="/home">
          <Button className="button" style={{ width: "10rem" }}>
              Submit
            </Button>
            </Link>
            </div>
          </div>
          </div>
      </div>
    </Container>
  );
};

export default ChooseInterest;
