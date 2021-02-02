import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, TimePicker, Slider } from 'antd';
import 'antd/dist/antd.css'; // use for RangePicker style

import './style.css';

const MainInput = ({ type, width, height, placeholder, min, max }) => {
  const [sliderValue, setSliderValue] = useState([]);
  const { TextArea } = Input;
  const { RangePicker } = TimePicker;

  const style = { width, height };

  const sliderOnChange = (value) => {
    setSliderValue(value);
  };
  const inputLabel = <span>اسم الروضة</span>;
  let input;
  switch (type) {
    case 'text':
      input = <Input placeholder={placeholder} style={style} />;
      break;
    case 'textArea':
      input = (
        <TextArea
          placeholder={placeholder}
          autoSize={{ minRows: 3, maxRows: 5 }}
          style={style}
        />
      );
      break;
    case 'date':
      input = <RangePicker style={style} />;
      break;
    case 'rangeSlider':
      input = (
        <div>
          <Slider
            range
            min={min}
            max={max}
            defaultValue={[min, max]}
            style={style}
            onChange={sliderOnChange}
          />
          {sliderValue}
        </div>
      );
      break;
    default:
      input = <></>;
  }
  return (
    <div className="Input">
      {inputLabel}
      {input}
    </div>
  );
};

MainInput.defaultProps = {
  width: '300px',
  height: '40px',
  placeholder: '',
  min: 0,
  max: 900,
};

MainInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default MainInput;
