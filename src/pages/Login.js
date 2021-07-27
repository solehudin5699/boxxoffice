import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './login.css';
import logo from '../assets/images/logo.png';
import FormLogin from '../components/FormLogin';

export default function Login() {
  return (
    <Container fluid className="containerLogin">
      <Row className="row">
        <Col className="col-md-6 col-12 d-flex align-items-center justify-content-center">
          <img className="logo" src={logo} alt="logo" />
        </Col>
        <Col className="col-md-6 col-12 d-flex align-items-md-center align-items-start">
          <FormLogin />
        </Col>
      </Row>
    </Container>
  );
}
