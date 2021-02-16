import React, { useState } from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';
import './style.css';

import MainInput from '../Common/MainInput';
import DorpList from '../Common/DropList';
import MainButton from '../Common/MainButton';

const { Title } = Typography;

const KindergartenForm = ({ onAdd, dorpListOptions, sliderMin, sliderMax }) => {
  const [selectValue, setSelectValue] = useState({});
  const [sliderValue, setSliderValue] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const onClick = () => {
    onAdd(inputValue, sliderValue, selectValue);
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
  return (
    <>
      <Title className="title" level={5}>
        اضافة روضة
      </Title>
      <hr />
      <div className="form-container">
        <div className="row">
          <div className="column">
            <h3>
              اسم الروضة :
              <MainInput
                type="text"
                height="48px"
                width="471px"
                onChange={onMainInputChange}
              />
            </h3>
            <h3>
              وصف عن الروضية :
              <MainInput
                type="textArea"
                height="123px"
                width="471px"
                onChange={onMainInputChange}
              />
            </h3>
            <h3>
              تفاصيل المكان :
              <DorpList options={dorpListOptions} onSelect={onDorpListSelect} />
            </h3>
            <h3>
              رقم الحوال :
              <MainInput
                type="text"
                height="48px"
                width="471px"
                onChange={onMainInputChange}
              />
            </h3>

            <h3>
              فترات الدوام :
              <MainInput
                type="text"
                height="48px"
                width="471px"
                onChange={onMainInputChange}
              />
            </h3>
          </div>
          <div className="column">
            <h3 className="slider">رسوم الطفل :</h3>
            <MainInput
              type="rangeSlider"
              width="200px"
              onSliderChange={onSliderChange}
              min={sliderMin}
              max={sliderMax}
            />
          </div>
        </div>
      </div>
      <div className="btn-container">
        <MainButton
          className="btn-container"
          onClick={onClick}
          height="52px"
          width="122px"
          border="1.6px solid #69938F"
          backgroundColor="var(--main-color)"
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
    </>
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
