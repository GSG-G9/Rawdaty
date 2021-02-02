import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, TimePicker, Slider } from 'antd';
import 'antd/dist/antd.css'; // use for RangePicker style

import './style.css';

const MainInput = ({
  type,
  width,
  height,
  placeholder,
  min,
  max,
  value,
  onChange,
}) => {
  const [sliderValue, setSliderValue] = useState([min, max]);
  const { TextArea } = Input;
  const { RangePicker } = TimePicker;

  const style = { width, height };

  const sliderOnChange = (val) => {
    setSliderValue(val);
    onChange(val);
  };

  const inputLabel = <span className="input-label">اسم الروضة</span>;
  let input;
  switch (type) {
    case 'text':
      input = (
        <Input
          placeholder={placeholder}
          style={style}
          defaultValue={value}
          onChange={onChange}
        />
      );
      break;
    case 'textArea':
      input = (
        <TextArea
          placeholder={placeholder}
          autoSize={{ minRows: 3, maxRows: 5 }}
          style={style}
          defaultValue={value}
          onChange={onChange}
        />
      );
      break;
    case 'date':
      input = (
        <RangePicker style={style} defaultValue={value} onChange={onChange} />
      );
      break;
    case 'rangeSlider':
      input = (
        <div>
          <div className="Slider">
            <Slider
              range
              min={min}
              max={max}
              value={sliderValue}
              style={{ width }}
              defaultValue={value}
              onChange={sliderOnChange}
            />
            <span className="slider-label">{`${sliderValue[0]} - ${sliderValue[1]} ₪`}</span>
          </div>
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
  value: '',
  onChange: () => {},
};

MainInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default MainInput;
