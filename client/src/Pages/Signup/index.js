import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';
import { Image, Form, Button, Input, Typography, Spin, Alert } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import MainInput from '../../Components/Common/MainInput';
import signupphoto from '../../assets/img/signup-photo.png';
import './style.css';

const { Title } = Typography;

const Signup = () => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState();
  const history = useHistory();

  const onFinish = async ({ username, email, password, confirm }) => {
    console.log({ username, email, password, confirm });
    try {
      setLoaded(true);
      await Axios.post(`/api/v1/signup`, {
        userName: username.trim(),
        email: email.trim(),
        password,
        confirmPassword: confirm,
      });
      setLoaded(false);
      history.push('/');
    } catch (err) {
      let e;
      if (err.message) {
        switch (err.message) {
          case 'You are registered':
            e = 'البريد الالكتروني موجود بالفعل !!';
            break;

          default:
            e = 'حصل خطأ غير متوقع حاول مجددا';
            setLoaded(false);
            setError(e);
        }
      }
    }
  };
  return (
    <div className="container">
      <div className="image-container">
        <Image src={signupphoto} preview={false} />
      </div>
      <div className="form-container">
        <Title level={1} className="navbar-logo-div-title">
          روضــتـــي
        </Title>
        <Title level={3}>إنشاء حساب جديد</Title>
        <Form layout="vertical" size="large" onFinish={onFinish}>
          <Form.Item
            name="username"
            label="اسم المستخدم"
            rules={[{ required: true, message: 'Please input your username!' }]}
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
                message: 'The input is not valid E-mail!',
              },
            ]}
          >
            <MainInput type="text" />
          </Form.Item>

          <Form.Item
            name="password"
            label="كلمة المرور"
            rules={[{ required: true, message: 'Please input your password!' }]}
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
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(setError('كلمات المرور غير متطابقة '));
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
                <Spin />
              ) : (
                <Title level={5} className="signup-text">
                  إنشاء حساب حديد
                </Title>
              )}
            </Button>
          </Form.Item>
          {error && <Alert message={error} type="error" />}
        </Form>
        <Link to="/">
          <Title level={4} className="navbar-logo-div-title">
            تسجيل الدخول
          </Title>
        </Link>
      </div>
    </div>
  );
};
export default Signup;
