import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Typography } from 'antd';
import MainInput from '../../Components/Common/MainInput';
import MainButton from '../../Components/Common/MainButton';

import './style.css';

const { Title } = Typography;

const LoginPage = () => (
  <Row id="Login-container">
    <Col id="form-container" span={12}>
      <Title id="title" level={1}>
        روضتـــي
      </Title>
      <Title level={1} style={{ marginTop: 0, color: '#5A5A5A' }}>
        مرحبا بعودتك
      </Title>
      <MainInput
        type="text"
        textLabel="البريد الإلكتروني"
        placeholder="example@example.com"
        width="470px"
        height="60px"
        id="input"
      />
      <MainInput
        type="password"
        textLabel="كلمة المرور"
        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        width="470px"
        height="60px"
        id="input"
      />
      <MainButton id="login-btn" width="470px" height="55px">
        تسجيل الدخول
      </MainButton>
      <div className="sign-up">
        <NavLink className="sign-up-link" to="/sign-up">
          إنشاء حساب جديد
        </NavLink>
      </div>
    </Col>
    <Col id="left-image" span={12} />
  </Row>
);

export default LoginPage;
