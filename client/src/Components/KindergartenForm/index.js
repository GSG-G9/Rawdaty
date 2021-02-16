import React, { useState } from 'react';
import { Typography, Form, Upload } from 'antd';
import PropTypes from 'prop-types';
import { UploadOutlined } from '@ant-design/icons';
import './style.css';

import MainInput from '../Common/MainInput';
import DorpList from '../Common/DropList';
import MainButton from '../Common/MainButton';

const { Title } = Typography;

const KindergartenForm = ({ onAdd, dorpListOptions, sliderMin, sliderMax }) => {
  const [selectValue, setSelectValue] = useState({});
  const [sliderValue, setSliderValue] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [add, setAdd] = useState(false);
  const [fileList, setFileList] = useState([]);

  const onClick = () => {
    onAdd(inputValue, sliderValue, selectValue);
  };

  const onPeriodChange = () => {
    setAdd(true);
  };

  const onSliderChange = (val) => {
    setSliderValue(val);
  };

  const onDorpListSelect = (val) => {
    setSelectValue(val);
  };

  const onMainInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onUpload = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  return (
    <Form>
      <Title className="title" level={5}>
        اضافة روضة
      </Title>
      <hr />
      <div className="form-container">
        <div className="row">
          <div className="column">
            <Form.Item>
              <MainInput
                type="text"
                textLabel="اسم الروضة :"
                height="48px"
                width="471px"
                onChange={onMainInputChange}
              />
            </Form.Item>
            <Form.Item>
              <MainInput
                type="textArea"
                textLabel="وصف عن الروضية :"
                height="123px"
                width="471px"
                onChange={onMainInputChange}
              />
            </Form.Item>
            <h3>
              تفاصيل المكان :
              <DorpList options={dorpListOptions} onSelect={onDorpListSelect} />
            </h3>
            <Form.Item>
              <MainInput
                type="text"
                textLabel="رقم الحوال :"
                height="48px"
                width="471px"
                onChange={onMainInputChange}
              />
            </Form.Item>
            <Form>
              <Form.Item name="period1">
                <MainInput
                  height="48px"
                  width="471px"
                  textLabel="فترات الدوام :"
                  type="date"
                />
              </Form.Item>
            </Form>
          </div>
          <div className="column">
            <Form.Item className="main-upload">
              <p>اضف صورة للروضة</p>
              <Upload>
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
            <Form.Item className="slider-input">
              <MainInput
                type="rangeSlider"
                textLabel="رسوم الطفل :"
                width="200px"
                onSliderChange={onSliderChange}
                min={sliderMin}
                max={sliderMax}
              />
            </Form.Item>
            <Form.Item className="period2" name="period2">
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
          </div>
        </div>
      </div>
      <Form.Item>
        <Upload
          className="imgs"
          listType="picture-card"
          fileList={fileList}
          onChange={onUpload}
        >
          {fileList.length < 8 && '+ اضف مزيدا من الصور'}
        </Upload>
      </Form.Item>
      ;
      <div className="btn-container">
        <MainButton
          className="btn-container"
          onClick={onClick}
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
          onClick={onClick}
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

export default KindergartenForm;

KindergartenForm.defaultProps = {
  sliderMin: 500,
  sliderMax: 2000,
};

KindergartenForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  sliderMin: PropTypes.number,
  sliderMax: PropTypes.number,
  dorpListOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ).isRequired,
};
