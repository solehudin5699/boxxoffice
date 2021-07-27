import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Col, Tab, ListGroup } from 'react-bootstrap';
import './formLogin.css';
import FormStore from './FormStore';
import FormDataPersonal from './FormDataPersonal';

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

export default function FormRegist(props) {
  const [tab, setTab] = useState(1);
  const [dataRegist, setDataRegist] = useState({ image: '', address: '' });

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

  const onSubmitDataPersonal = (data) => {
    setDataRegist(data);
    setTab(2);
  };
  const onSubmitStore = (data) => {
    console.log(data);
  };
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
                <FormDataPersonal
                  dataRegist={dataRegist}
                  onSubmit={onSubmitDataPersonal}
                />
              </Tab.Pane>
              <Tab.Pane eventKey={2}>
                <FormStore
                  dataRegist={dataRegist}
                  setDataRegist={setDataRegist}
                  onSubmit={onSubmitStore}
                />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Card.Body>
      </Card>
    </Col>
  );
}
