import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form } from 'react-bootstrap';
import './formLogin.css';

const validationSchemaPersonal = Yup.object({
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
  const { dataRegist, onSubmit } = props;
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        phone: '',
        address: '',
        password: '',
      }}
      validationSchema={validationSchemaPersonal}
      onSubmit={(values) => {
        onSubmit({ ...dataRegist, ...values });
      }}
    >
      {(formik) => (
        <div>
          <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
            <Form.Label className="input-label">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Masukkan email"
              {...formik.getFieldProps('email')}
              className={
                formik.touched.email && formik.errors.email && 'inputError'
              }
            />
            {formik.touched.email && formik.errors.email && (
              <Form.Text className="textError">{formik.errors.email}</Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="input-label">Nama</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan nama"
              {...formik.getFieldProps('name')}
              className={
                formik.touched.name && formik.errors.name && 'inputError'
              }
            />
            {formik.touched.name && formik.errors.name && (
              <Form.Text className="textError">{formik.errors.name}</Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label className="input-label">Nomor Telepon</Form.Label>
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
                  formik.touched.phone && formik.errors.phone && 'inputError'
                }
              />
            </div>
            {formik.touched.phone && formik.errors.phone && (
              <Form.Text className="textError">{formik.errors.phone}</Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label className="input-label">Alamat</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan alamat"
              {...formik.getFieldProps('address')}
              className={
                formik.touched.address && formik.errors.address && 'inputError'
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
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
          <div className="mb-3">
            <h6 className="input-label mb-1">Buatlah password yang:</h6>
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
            Selanjutnya
          </button>
          <p className="loginAgreement mb-4">
            Dengan menggunakan aplikasi ini anda menyetujui{' '}
            <span className="linkLoginAgreement">syarat dan ketentuan</span>
          </p>
          <p className="questAccount">
            Sudah punya akun?{' '}
            <span onClick={() => history.push('/login')} className="linkRegist">
              Login
            </span>
          </p>
        </div>
      )}
    </Formik>
  );
}
