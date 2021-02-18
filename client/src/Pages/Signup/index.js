import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';
import { Image, Form, Button, Input, Typography, Result, Alert } from 'antd';
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  SyncOutlined,
} from '@ant-design/icons';
import MainInput from '../../Components/Common/MainInput';
import signupphoto from '../../assets/img/signup-photo.png';

import './style.css';
import AuthContext from '../../Context/AuthContext';

const { Title } = Typography;

const Signup = () => {
  const [loaded, setLoaded] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState();
  const [isOk, setIsOk] = useState(false);

  const history = useHistory();

  const onFinish = async ({ username, email, password, confirm }) => {
    try {
      setError();
      setSuccess(false);
      setLoaded(true);
      await Axios.post(`/api/v1/signup`, {
        userName: username.trim(),
        email: email.trim(),
        password,
        confirmPassword: confirm,
      });
      setLoaded(false);
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
      setLoaded(false);
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
          <div className="container">
            <div className="image-container">
              <Image src={signupphoto} preview={false} />
            </div>
            <div className="form-container">
              <Title level={1} className="navbar-logo-div-title">
                روضــتـــي
              </Title>
              {success && (
                <Result status="success" title="تم تسجيل حسابك بنجاح" />
              )}
              <Title level={3}>إنشاء حساب جديد</Title>
              <Form layout="vertical" size="large" onFinish={onFinish}>
                <Form.Item
                  name="username"
                  label="اسم المستخدم"
                  rules={[
                    { required: true, message: 'الرجاء إدخال اسم المستخدم' },
                    {
                      min: 5,
                      message: 'اسم المستخدم يجب أن يتكون من 5 حروف على الأقل',
                    },
                  ]}
                >
                  <MainInput type="text" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="البريد الالكتروني"
                  rules={[
                    {
                      required: true,
                      type: 'email',
                      message: 'الرجاء إدخال  بريد الكتروني صحيح',
                    },
                  ]}
                >
                  <MainInput type="text" />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="كلمة المرور"
                  rules={[
                    { required: true, message: 'الرجاء إدخال كلمة المرور' },
                    {
                      min: 8,
                      message: 'كلمة المرور يجب أن تتكون من 8 حروف او أرقام',
                    },
                  ]}
                >
                  <Input.Password
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>

                <Form.Item
                  name="confirm"
                  label="تأكيد كلمة المرور"
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
                  <Input.Password
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" block id="signup">
                    {loaded ? (
                      <SyncOutlined spin />
                    ) : (
                      <Title level={5} className="signup-text">
                        إنشاء حساب حديد
                      </Title>
                    )}
                  </Button>
                </Form.Item>

                {error && (
                  <Alert
                    message={error}
                    type="error"
                    style={{ marginBottom: '20px' }}
                  />
                )}
              </Form>
              <Link to="/">
                <Title level={4} className="navbar-logo-div-title">
                  تسجيل الدخول
                </Title>
              </Link>
            </div>
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
};
export default Signup;
