import React, { useState, useEffect } from 'react';
import { Typography, Form, Row, Col, notification } from 'antd';
import PropTypes from 'prop-types';
import axios from 'axios';

import MainInput from '../Common/MainInput';
import DropList from '../Common/DropList';
import MainButton from '../Common/MainButton';

import './style.css';

const { Title } = Typography;

const KindergartenForm = ({ onDone, onDiscard }) => {
  const [add, setAdd] = useState(false);
  const [minPrice, setMinPrice] = useState(400);
  const [maxPrice, setMaxPrice] = useState(4000);
  const [options, setOptions] = useState([]);
  const [selectValue, setSelectValue] = useState('');

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(`/api/v1/locations`)
      .then(({ data: { data } }) => {
        setOptions(data);
      })
      .catch(() => {
        notification.open({
          message: 'حدث خطأ في السيرفر, يرجى المحاولة لاحقا',
        });
      });

    return () => {
      source.cancel('Cancelling in cleanup');
    };
  }, []);

  const onFinish = async (val) => {
    const {
      description,
      kindergartenName,
      period1,
      period2,
      phoneNumber,
      coverImage,
    } = val;

    const periods = [];

    if (period1) {
      periods.push([
        period1[0].format('h:mm:ss a'),
        period1[1].format('h:mm:ss a'),
      ]);
    }

    if (period2) {
      periods.push([
        period1[0].format('h:mm:ss a'),
        period1[1].format('h:mm:ss a'),
      ]);
    }

    const values = {
      description,
      kindergartenName,
      phoneNumber,
      coverImage,
      locationId: selectValue,
      minPrice,
      maxPrice,
      periods: JSON.stringify(periods),
    };
    try {
      await axios.post(`/api/v1/kindergarten`, values);
      onDone();
    } catch (error) {
      notification.open({
        message: 'حدث خطأ في السيرفر, يرجى المحاولة لاحقا',
      });
    }
  };

  const onPriceSliderChange = (val) => {
    setMinPrice(val[0]);
    setMaxPrice(val[0]);
  };

  const onDorpListSelect = (val) => {
    setSelectValue(val);
    if (val.key !== 'كل المنطقة') {
      setSelectValue(
        options.filter((data) => data.location_sub === val.key)[0].id
      );
    } else {
      setSelectValue('');
    }
  };

  const onPeriodChange = () => {
    setAdd(true);
  };

  return (
    <Form onFinish={onFinish}>
      <Title className="title" level={5}>
        اضافة روضة
      </Title>
      <hr />
      <Row>
        <Col span={12}>
          <Form.Item
            name="kindergartenName"
            rules={[{ required: true, message: 'الرجاء إدخال إسم الروضة !' }]}
          >
            <MainInput
              type="text"
              textLabel="اسم الروضة :"
              height="48px"
              width="471px"
            />
          </Form.Item>
          <Form.Item
            name="description"
            rules={[{ required: true, message: 'الرجاء إدخل وصف عن الروضة !' }]}
          >
            <MainInput
              type="textArea"
              textLabel="وصف عن الروضة :"
              height="75px"
              width="471px"
            />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            rules={[
              { required: true, message: 'الرجاء إدخال رقم الجوال !' },
              {
                pattern: /^[0-9-]*[0-9].{9,}$/,
                message: 'رقم الجوال غير صالح !',
              },
            ]}
          >
            <MainInput
              type="text"
              textLabel="رقم الجوال :"
              height="48px"
              width="471px"
            />
          </Form.Item>

          <Form.Item name="period1">
            <MainInput
              height="48px"
              width="471px"
              textLabel="فترات الدوام :"
              type="date"
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="coverImage"
            rules={[
              { required: true, message: 'الرجاء إدخال رابط صورة الغلاف !' },
            ]}
          >
            <MainInput
              type="text"
              textLabel="رابط صورة الغلاف :"
              height="48px"
              width="471px"
            />
          </Form.Item>

          <h3 className="drop">تفاصيل المكان :</h3>
          <Form.Item
            className="drop"
            name="locationId"
            rules={[{ required: true, message: 'الرجاء إدخل تفاصيل المكان !' }]}
          >
            <DropList
              label="رسوم الطفل :"
              options={options}
              onChange={onDorpListSelect}
            />
          </Form.Item>

          <Form.Item name="price" className="slider-input ">
            <MainInput
              type="rangeSlider"
              textLabel="رسوم الطفل :"
              width="450px"
              min={minPrice}
              max={maxPrice}
              onChange={onPriceSliderChange}
            />
          </Form.Item>

          <Form.Item name="period2" className="period2">
            {add ? (
              <MainInput height="48px" width="471px" type="date" />
            ) : (
              <MainButton
                type="primary"
                height="48px"
                width="471px"
                htmlType="submit"
                onClick={onPeriodChange}
              >
                اضف فترة ثانية +
              </MainButton>
            )}
          </Form.Item>
        </Col>
      </Row>

      <div className="btn-container">
        <MainButton
          className="btn-container"
          height="52px"
          width="122px"
          border="1.6px solid #69938F"
          backgroundColor="var(--main-color)"
          htmlType="submit"
        >
          إضافة
        </MainButton>

        <MainButton
          className="btn-container"
          onClick={onDiscard}
          height="52px"
          width="122px"
          border="1.6px solid #69938F"
          backgroundColor="#FFF"
          color="#000"
        >
          تجاهل
        </MainButton>
      </div>
    </Form>
  );
};

KindergartenForm.defaultProps = {
  onDone: () => {},
  onDiscard: () => {},
};

KindergartenForm.propTypes = {
  onDone: PropTypes.func,
  onDiscard: PropTypes.func,
};

export default KindergartenForm;
