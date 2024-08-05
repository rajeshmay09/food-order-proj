import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Logins = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className="pt-4 pb-4">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="m-auto text-center">
            <form className="form mb-5" onSubmit={submitHandler}>
              <div className="form__group">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  ref={loginNameRef}
                />
              </div>
              <div className="form__group">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  ref={loginPasswordRef}
                />
              </div>
              <button type="submit" className="addTOCart__btn">
                Login
              </button>
            </form>
            <Link to="/register">Don't have an account? Create an account</Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Logins;
