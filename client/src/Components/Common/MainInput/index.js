import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, TimePicker, Slider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

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
  textLabel,
  borderColor,
  fontColor,
  dateValue,
}) => {
  const [sliderValue, setSliderValue] = useState([min, max]);
  const { TextArea } = Input;
  const { RangePicker } = TimePicker;

  const style = { width, height, borderColor, fontColor };

  const sliderOnChange = (val) => {
    setSliderValue(val);
    onChange(val);
  };

  const inputLabel = textLabel && (
    <span className="input-label">{textLabel}</span>
  );

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
          style={{ ...style, minHeight: height, maxHeight: height }}
          defaultValue={value}
          onChange={onChange}
        />
      );
      break;
    case 'date':
      input = (
        <RangePicker
          style={style}
          defaultValue={dateValue}
          onChange={onChange}
        />
      );
      break;
    case 'rangeSlider':
      input = (
        <div className="slider-contener">
          <div className="slider">
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
    case 'search':
      input = (
        <Input
          className="search-input"
          placeholder={placeholder}
          style={style}
          defaultValue={value}
          onChange={onChange}
          prefix={<SearchOutlined />}
        />
      );
      break;
    default:
      input = <></>;
  }

  return (
    <div className="input" style={{ color: fontColor }}>
      {inputLabel}
      {input}
    </div>
  );
};

MainInput.defaultProps = {
  width: '',
  height: '',
  placeholder: '',
  min: 0,
  max: 900,
  value: '',
  onChange: () => {},
  textLabel: '',
  borderColor: '',
  fontColor: '',
  dateValue: [],
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
  textLabel: PropTypes.string,
  borderColor: PropTypes.string,
  fontColor: PropTypes.string,
  dateValue: PropTypes.arrayOf(PropTypes.object),
};

export default MainInput;
