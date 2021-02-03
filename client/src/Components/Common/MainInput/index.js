import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, TimePicker, Slider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import './style.css';

const MainInput = ({
  type,
  width,
  height,
  textLabel,
  borderColor,
  fontColor,
  dateValue,
  min,
  max,
  onSliderChange,
  ...otherInputProps
}) => {
  const [sliderValue, setSliderValue] = useState([min, max]);
  const { TextArea } = Input;
  const { RangePicker } = TimePicker;

  const style = { width, height, borderColor, fontColor };

  const sliderOnChange = (val) => {
    setSliderValue(val);
    onSliderChange(val);
  };

  const inputLabel = textLabel && (
    <span className="input-label">{textLabel}</span>
  );

  let input;

  switch (type) {
    case 'text':
      input = <Input style={style} {...otherInputProps} />;
      break;
    case 'textArea':
      input = (
        <TextArea
          style={{ ...style, minHeight: height, maxHeight: height }}
          {...otherInputProps}
        />
      );
      break;
    case 'date':
      input = <RangePicker style={style} {...otherInputProps} />;
      break;
    case 'rangeSlider':
      input = (
        <div className="slider">
          <Slider
            onChange={sliderOnChange}
            range
            value={sliderValue}
            style={{ width }}
            min={min}
            max={max}
          />
          <span className="slider-label">{`${sliderValue[0]} - ${sliderValue[1]} ₪`}</span>
        </div>
      );
      break;
    case 'search':
      input = (
        <Input
          className="search-input"
          style={style}
          prefix={<SearchOutlined />}
          {...otherInputProps}
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
  textLabel: '',
  borderColor: '',
  min: 0,
  max: 900,
  fontColor: '',
  dateValue: [],
  onSliderChange: () => {},
};

MainInput.propTypes = {
  type: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  textLabel: PropTypes.string,
  borderColor: PropTypes.string,
  fontColor: PropTypes.string,
  dateValue: PropTypes.arrayOf(PropTypes.object),
  min: PropTypes.number,
  max: PropTypes.number,
  onSliderChange: PropTypes.func,
};

export default MainInput;
