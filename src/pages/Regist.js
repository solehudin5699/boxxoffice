import React from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import './login.css';
import logo from '../assets/images/logo.png';
import FormRegist from '../components/FormRegist';

export default function Regist() {
  return (
    <Container fluid className="containerLogin">
      <Row cassName="row">
        <Col className="col-md-6 col-12 d-flex justify-content-center align-items-center ">
          <img className="logo" src={logo} alt="logo" />
        </Col>
        <Col className="col-md-6 col-12 d-flex align-items-md-center align-items-start">
          <FormRegist />
        </Col>
      </Row>
    </Container>
  );
}
