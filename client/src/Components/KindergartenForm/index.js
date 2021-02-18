import React, { useState, useEffect } from 'react';
import { Typography, Form, Row, Col, Upload, notification } from 'antd';
import PropTypes from 'prop-types';
import axios from 'axios';
import { UploadOutlined } from '@ant-design/icons';

import MainInput from '../Common/MainInput';
import DropList from '../Common/DropList';
import MainButton from '../Common/MainButton';

import './style.css';

const { Title } = Typography;

const KindergartenForm = ({ onDone, onDiscard }) => {
  const [add, setAdd] = useState(false);
  const [fileList, setFileList] = useState([]);
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
    } = val;

    const periods = [];

    periods.push([
      period1[0].format('h:mm:ss a'),
      period1[1].format('h:mm:ss a'),
    ]);

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
      coverImage:
        'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/127563203_2816927261908481_825163598039189311_o.jpg?_nc_cat=100&ccb=2&_nc_sid=e3f864&_nc_ohc=EOam1iTQLIcAX8jrnEj&_nc_ht=scontent.fgza2-1.fna&oh=e1cef81bf1cebbd72a6c1f1af651e01f&oe=604638FB',
      locationId: selectValue,
      minPrice,
      maxPrice,
      periods: JSON.stringify(periods),
      imagesGallery:
        '["https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p526x395/126362711_2810037339264140_8115186378406081155_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=1pa0nWqLMVQAX8xj-8Z&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=43ba32d04a1478c83ca4cee8950955f9&oe=6045D9DF","https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p180x540/125246489_2806470342954173_5557632858147020336_o.jpg?_nc_cat=106&ccb=2&_nc_sid=e3f864&_nc_ohc=ZGPkuyaJoUEAX9lkFkC&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=0a5795c9d04ed69df0ecf950260a8240&oe=60475C85","https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/127711338_2816934215241119_820060672107449619_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=lj0hKeD_FswAX-IthGI&_nc_ht=scontent.fgza2-1.fna&oh=ff73fc70463202e07ef1ab8945b1aaf6&oe=6047D28E","https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/125969111_2810046942596513_7374678634903478541_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=26lBVKEuxXgAX-LkaQx&_nc_ht=scontent.fgza2-1.fna&oh=98b4dfd19c0ec101fab0c68fcafb2ed7&oe=60489661","https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-0/p526x395/126221172_2810852509182623_3908586823989526775_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=r4JC03VXovYAX-ZDyZv&_nc_ht=scontent.fgza2-1.fna&tp=6&oh=a04d43782df65a5367387fa7d876a6cc&oe=6047FCA7","https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126420691_2810858432515364_8382015493325068832_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=8m_uU2uLr9kAX-TeYbI&_nc_ht=scontent.fgza2-1.fna&oh=8b17321eb157fe3c7a9d7c09ba6182bc&oe=604782E5","https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/126361201_2810861959181678_2949636133222938705_o.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_ohc=xj63fLB5DpYAX8g2PTJ&_nc_ht=scontent.fgza2-1.fna&oh=88ac8fb67a2c9c87ee2ed8940f2c14fb&oe=60451FF9"]',
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

  const onMoreImageUpload = ({ fileList: newFileList }) => {
    setFileList(newFileList);
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
              textLabel="رقم الحوال :"
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
            className="main-upload"
            name="caverImage"
            rules={[{ required: true, message: 'الرجاء اضف صورة للروضة !' }]}
          >
            <Upload listType="picture" maxCount={1} className="main-upload">
              <MainButton
                height="48px"
                width="471px"
                border="1.6px solid #69938F"
                backgroundColor="#FFF"
                color="#000"
              >
                تحميل صورة
                <UploadOutlined />
              </MainButton>
            </Upload>
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
      <Form.Item name="moreImage">
        <Upload listType="picture-card" onChange={onMoreImageUpload}>
          {fileList.length < 8 && '+ اضف مزيدا من الصور'}
        </Upload>
      </Form.Item>

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
