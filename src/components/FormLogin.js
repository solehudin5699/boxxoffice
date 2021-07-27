import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { loginUser } from "../../redux/actions/users/auth";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Card, Form, Col } from 'react-bootstrap';
import './formLogin.css';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Must be 8 characters or more')
    .required('Required'),
});

export default function FormLogin(props) {
  // const dispatch = useDispatch();

  const { isLogin } = useSelector((state) => state.auth);
  const history = useHistory();
  useEffect(() => {
    if (isLogin) {
      history.push('/');
    }
  }, [isLogin]);
  useEffect(() => {
    if (isLogin) {
      history.push('/');
    }
  }, []);
  return (
    <Col className="col-12 col-md-8">
      <Card className="cardLogin">
        <Card.Body>
          <h4 className="login-title">Masuk</h4>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              // alert(`${values.email}`);
              // dispatch(loginUser(values));
            }}
          >
            {(formik) => (
              <div>
                <Form.Group className="mb-4 mt-4" controlId="formBasicEmail">
                  <Form.Label className="input-label">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Masukkan email"
                    {...formik.getFieldProps('email')}
                    className={
                      formik.touched.email &&
                      formik.errors.email &&
                      'inputError'
                    }
                  />
                  {formik.touched.email && formik.errors.email && (
                    <Form.Text className="textError">
                      {formik.errors.email}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label className="input-label">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Masukkan password"
                    {...formik.getFieldProps('password')}
                    className={
                      formik.touched.password &&
                      formik.errors.password &&
                      'inputError'
                    }
                  />
                  {formik.touched.password && formik.errors.password && (
                    <Form.Text className="textError">
                      {formik.errors.password}
                    </Form.Text>
                  )}
                </Form.Group>
                <div className="ms-auto d-flex justify-content-end">
                  <h6 className="mb-4 linkForgotPassword">Lupa Password?</h6>
                </div>
                <button
                  className="btnLogin mb-3"
                  type="submit"
                  onClick={formik.handleSubmit}
                  style={{ outline: 'none' }}
                >
                  {/* {isLoginPending ? (
                    <i className='fa fa-spinner fa-spin fa-2x fa-fw'></i>
                  ) : (
                    "Sign In"
                  )} */}
                  Login
                </button>
                <p className="loginAgreement mb-4">
                  Dengan menggunakan aplikasi ini anda menyetujui{' '}
                  <span className="linkLoginAgreement">
                    syarat dan ketentuan
                  </span>
                </p>
                <p className="questAccount">
                  Belum punya akun?{' '}
                  <span
                    onClick={() => history.push('/regist')}
                    className="linkRegist"
                  >
                    Daftar Disini
                  </span>
                </p>
              </div>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </Col>
  );
}
