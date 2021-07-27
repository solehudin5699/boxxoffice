import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { loginUser } from "../../redux/actions/users/auth";
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Card,
  Form,
  Col,
  Tab,
  ListGroup,
  Row,
  Container,
} from 'react-bootstrap';
import './formLogin.css';

const TabHeader = ({ tab }) => {
  return (
    <ListGroup className="p-1 w-100" horizontal>
      <ListGroup.Item className="p-1 w-50" style={{ height: '48px' }}>
        <div
          className="text-center h-100 d-flex align-items-center justify-content-center w-100 rounded"
          style={{ backgroundColor: tab === 1 && '#EBF0FA' }}
        >
          <div
            className="rounded-circle d-flex align-items-center justify-content-center me-1 p-1 text-white"
            style={{
              backgroundColor: tab === 1 ? '#192a55' : '#828282',
              width: '20px',
              height: '20px',
            }}
          >
            {tab === 1 ? (
              <span style={{ fontSize: '12px' }}>1</span>
            ) : (
              <i class="fa fa-check text-white" aria-hidden="true"></i>
            )}
          </div>
          <span
            style={{
              color: tab === 1 ? '#192a55' : '#828282',
              fontWeight: '700',
            }}
          >
            Daftar
          </span>
        </div>
      </ListGroup.Item>
      <ListGroup.Item className="p-1 w-50" style={{ height: '48px' }}>
        <div
          className="text-center h-100 d-flex align-items-center justify-content-center w-100 rounded"
          style={{ backgroundColor: tab === 2 && '#EBF0FA' }}
        >
          <div
            style={{
              backgroundColor: tab === 2 ? '#192a55' : '#828282',
              width: '20px',
              height: '20px',
            }}
            className="rounded-circle d-flex align-items-center justify-content-center me-1 p-1 text-white"
          >
            <span style={{ fontSize: '12px' }}>2</span>
          </div>
          <span
            style={{
              color: tab === 2 ? '#192a55' : '#828282',
              fontWeight: '700',
            }}
          >
            Info Toko
          </span>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  name: Yup.string().required('Required'),
  password: Yup.string()
    .min(8, 'Must be 8 characters or more')
    .matches(/^([a-zA-Z]){0,}$/, 'Must contain a-z and A-Z')
    .required('Required'),
  phone: Yup.number().required('Required'),
  address: Yup.string().required('Required'),
});

export default function FormRegist(props) {
  const [tab, setTab] = useState(1);
  const [dataRegist, setDataRegist] = useState({});
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
          <TabHeader tab={tab} />
          <h4 className="login-title mt-2">
            {tab === 1 ? 'Daftar' : 'Info Toko'}
          </h4>
          <Tab.Container id="left-tabs-example" activeKey={tab}>
            <Tab.Content>
              <Tab.Pane eventKey={1}>
                <Formik
                  initialValues={{
                    email: '',
                    name: '',
                    phone: '',
                    address: '',
                    password: '',
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    setDataRegist(values);
                    setTab(2);
                  }}
                >
                  {(formik) => (
                    <div>
                      <Form.Group
                        className="mb-3 mt-3"
                        controlId="formBasicEmail"
                      >
                        <Form.Label className="input-label">Email</Form.Label>
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
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="input-label">Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Masukkan name"
                          {...formik.getFieldProps('name')}
                          className={
                            formik.touched.name &&
                            formik.errors.name &&
                            'inputError'
                          }
                        />
                        {formik.touched.name && formik.errors.name && (
                          <Form.Text className="textError">
                            {formik.errors.name}
                          </Form.Text>
                        )}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label className="input-label">
                          Nomor Telepon
                        </Form.Label>
                        <div className="d-flex justify-content-between">
                          <Form.Select
                            className="me-3"
                            style={{ width: '30%' }}
                            aria-label="Default select example"
                          >
                            <option>+62</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                          <Form.Control
                            className="w-70"
                            type="number"
                            placeholder="Masukkan nomor telepon"
                            {...formik.getFieldProps('phone')}
                            className={
                              formik.touched.phone &&
                              formik.errors.phone &&
                              'inputError'
                            }
                          />
                        </div>
                        {formik.touched.phone && formik.errors.phone && (
                          <Form.Text className="textError">
                            {formik.errors.phone}
                          </Form.Text>
                        )}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label className="input-label">Alamat</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Masukkan alamat"
                          {...formik.getFieldProps('address')}
                          className={
                            formik.touched.address &&
                            formik.errors.address &&
                            'inputError'
                          }
                          as="textarea"
                          rows={3}
                        />
                        {formik.touched.address && formik.errors.address && (
                          <Form.Text className="textError">
                            {formik.errors.address}
                          </Form.Text>
                        )}
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label className="input-label">
                          Password
                        </Form.Label>
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
                      <div className="mb-3">
                        <h6 className="input-label mb-1">
                          Buatlah password yang:
                        </h6>
                        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                          <li>
                            <i
                              class="fa fa-check-circle me-1"
                              style={{ color: '#1C1C1C' }}
                              aria-hidden="true"
                            ></i>
                            Minimal 8 karakter
                          </li>
                          <li>
                            <i
                              class="fa fa-check-circle me-1"
                              style={{ color: '#1C1C1C' }}
                              aria-hidden="true"
                            ></i>
                            Tidak berisi nama kamu atau alamat email
                          </li>
                          <li>
                            <i
                              class="fa fa-check-circle me-1"
                              style={{ color: '#1C1C1C' }}
                              aria-hidden="true"
                            ></i>
                            Memilki huruf kecil (a-z) dan huruf besar (A-Z)
                          </li>
                        </ul>
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
                        Selanjutnya
                      </button>
                      <p className="loginAgreement mb-4">
                        Dengan menggunakan aplikasi ini anda menyetujui{' '}
                        <span className="linkLoginAgreement">
                          syarat dan ketentuan
                        </span>
                      </p>
                      <p className="questAccount">
                        Sudah punya akun?{' '}
                        <span
                          onClick={() => history.push('/login')}
                          className="linkRegist"
                        >
                          Login
                        </span>
                      </p>
                    </div>
                  )}
                </Formik>
              </Tab.Pane>
              <Tab.Pane eventKey={2}>
                <h1 className="text-primary">2</h1>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Card.Body>
      </Card>
    </Col>
  );
}
