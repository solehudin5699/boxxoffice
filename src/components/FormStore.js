import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form } from 'react-bootstrap';
import './formLogin.css';
import { useHistory } from 'react-router-dom';
import SwitchToggle from './SwitchToggle';

const validationSchemaStore = Yup.object({
  storeName: Yup.string().required('Required'),
  storeAddress: Yup.string().required('Required'),
});

export default function FormRegist(props) {
  const { dataRegist, setDataRegist, onSubmit } = props;
  const [checkedAddress, setCheckedAddress] = useState(false);
  const history = useHistory();
  const imageInputRef = React.useRef();
  const handleChangeFile = (e) => {
    let files = e.target.files;
    setDataRegist({
      ...dataRegist,
      image: files[0],
    });
  };
  const handleSwitch = (checked) => {
    setCheckedAddress(checked);
  };
  const formik = useFormik({
    initialValues: {
      storeName: '',
      storeAddress: '',
    },
    validationSchema: validationSchemaStore,
    onSubmit: (values) => {
      onSubmit({ ...dataRegist, ...values });
    },
  });
  useEffect(() => {
    if (checkedAddress) {
      formik.setValues({ ...formik.values, storeAddress: dataRegist.address });
    } else if (!checkedAddress) {
      formik.setValues({ ...formik.values, storeAddress: '' });
    }
  }, [checkedAddress]);
  return (
    <div>
      <input
        onChange={(e) => handleChangeFile(e)}
        ref={imageInputRef}
        type="file"
        className="d-none"
      />
      <div className="mb-3 mt-3 d-flex flex-column justify-content-center align-items-center">
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: '#E8E8E8',
            overflow: 'hidden',
            cursor: 'pointer',
          }}
          onClick={() => {
            imageInputRef.current.click();
          }}
          className="rounded-circle d-flex justify-content-center align-items-center mb-3"
        >
          {dataRegist.image ? (
            <img
              style={{ width: '100px' }}
              alt=""
              src={dataRegist.image && URL.createObjectURL(dataRegist.image)}
            />
          ) : (
            <i class="fa fa-plus" aria-hidden="true"></i>
          )}
        </div>
        <button
          style={{
            border: '2px solid #192a55',
            height: '40px',
            borderRadius: '4px',
            color: '#192a55',
            fontSize: '16px',
            fontWeight: '700',
          }}
          onClick={() => {
            imageInputRef.current.click();
          }}
        >
          {dataRegist.image ? 'Ganti Logo' : 'Upload Logo'}
        </button>
      </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="input-label">
          Nama Toko <span className="text-muted">(wajib diisi)</span>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Masukkan nama toko"
          {...formik.getFieldProps('storeName')}
          className={
            formik.touched.storeName && formik.errors.storeName && 'inputError'
          }
          name="storeName"
          onChange={formik.handleChange}
          value={formik.values.storeName}
        />
        {formik.touched.storeName && formik.errors.storeName && (
          <Form.Text className="textError">{formik.errors.storeName}</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <div className="d-flex justify-content-between align-items-center">
          <Form.Label className="input-label">Alamat</Form.Label>
          <SwitchToggle
            label="Gunakan alamat pribadi"
            labelClass="input-label"
            onChange={handleSwitch}
          />
        </div>
        <Form.Control
          type="text"
          placeholder="Masukkan alamat kamu"
          {...formik.getFieldProps('storeAddress')}
          className={
            formik.touched.storeAddress &&
            formik.errors.storeAddress &&
            'inputError'
          }
          as="textarea"
          rows={3}
          maxLength={40}
          name="storeAddress"
          onChange={formik.handleChange}
          value={formik.values.storeAddress}
        />
        {formik.touched.storeAddress && formik.errors.storeAddress && (
          <Form.Text className="textError">
            {formik.errors.storeAddress}
          </Form.Text>
        )}
      </Form.Group>

      <button
        className="btnLogin mb-3"
        type="submit"
        onClick={formik.handleSubmit}
        style={{ outline: 'none' }}
      >
        Daftar Sekarang
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
  );
}
