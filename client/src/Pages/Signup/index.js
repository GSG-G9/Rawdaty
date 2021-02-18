import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Axios from 'axios';
import { Row, Col, Form, Typography, Result, Alert } from 'antd';
import MainInput from '../../Components/Common/MainInput';
import MainButton from '../../Components/Common/MainButton';

import AuthContext from '../../Context/AuthContext';

const { Title } = Typography;

const Signup = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState();
  const [isOk, setIsOk] = useState(false);

  const history = useHistory();

  const onFinish = async ({ username, email, password, confirm }) => {
    try {
      setError();
      setSuccess(false);

      await Axios.post(`/api/v1/signup`, {
        userName: username.trim(),
        email: email.trim(),
        password,
        confirmPassword: confirm,
      });

      setSuccess(true);
      setIsOk(true);
      history.push('/');
    } catch (err) {
      let e;
      if (err.response.data.message === 'You are registered') {
        e = 'البريد الالكتروني موجود بالفعل !!';
      } else {
        e = 'حصل خطأ غير متوقع حاول مجددا';
      }

      setError(e);
    }
  };
  return (
    <AuthContext.Consumer>
      {({ checkAuth }) => {
        if (isOk) {
          checkAuth();
        }
        return (
          <Row className="container">
            <Col id="left-image" span={12} />
            <Col id="container" span={12}>
              {success && (
                <Result status="success" title="تم تسجيل حسابك بنجاح" />
              )}

              <Form id="form-container" name="signup" onFinish={onFinish}>
                <NavLink to="/" id="title">
                  روضــتـــي
                </NavLink>
                <Title level={1} style={{ marginTop: 0, color: '#5A5A5A' }}>
                  إنشاء حساب جديد{' '}
                </Title>
                {error && (
                  <Alert id="alert" message={error} type="error" showIcon />
                )}

                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: 'الرجاء إدخال اسم المستخدم' },
                    {
                      min: 5,
                      message: 'اسم المستخدم يجب أن يتكون من 5 حروف على الأقل',
                    },
                  ]}
                >
                  <MainInput
                    type="text"
                    textLabel="اسم المستخدم"
                    placeholder="اسم المستخدم "
                    width="470px"
                    height="60px"
                    id="input"
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: ' الرجاء إدخال البريد الإلكتروني الخاص بك!',
                    },
                    {
                      pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: 'هذا البريد الإلكتروني غير صالح !',
                    },
                  ]}
                >
                  <MainInput
                    type="text"
                    textLabel="البريد الإلكتروني"
                    placeholder="example@example.com"
                    width="470px"
                    height="60px"
                    id="input"
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: 'الرجاء إدخال كلمة المرور' },
                    {
                      min: 8,
                      message: 'كلمة المرور يجب أن تتكون من 8 حروف او أرقام',
                    },
                  ]}
                >
                  <MainInput
                    type="password"
                    textLabel="كلمة المرور"
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    width="470px"
                    height="60px"
                    id="input"
                  />
                </Form.Item>

                <Form.Item
                  name="confirm"
                  dependencies={['password']}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: 'الرجاء تأكيد كلمة المرور',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          Error('كلمات المرور غير متطابقة')
                        );
                      },
                    }),
                  ]}
                >
                  <MainInput
                    type="password"
                    textLabel="تأكيد كلمة المرور"
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    width="470px"
                    height="60px"
                    id="input"
                  />
                </Form.Item>
                <MainButton
                  id="login-btn"
                  width="470px"
                  height="55px"
                  htmlType="submit"
                >
                  إنشاء حساب جديد
                </MainButton>
                <div className="sign-up">
                  <NavLink className="sign-up-link" to="/login">
                    تسجيل الدخول
                  </NavLink>
                </div>
              </Form>
            </Col>
          </Row>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Signup;
