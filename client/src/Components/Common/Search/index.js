import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

import DorpList from '../DropList';
import MainInput from '../MainInput';
import MainButton from '../MainButton';
import price from '../../../assets/icons/price.svg';

import './style.css';

const { Title } = Typography;

const Search = ({ dorpListOptions, onSearch, isRed, sliderMin, sliderMax }) => {
  const [selectValue, setSelectValue] = useState({});
  const [sliderValue, setSliderValue] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const onClick = () => {
    onSearch(selectValue, sliderValue, inputValue);
  };

  const onDorpListSelect = (val) => {
    setSelectValue(val);
  };

  const onSliderChange = (val) => {
    setSliderValue(val);
  };

  const onMainInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="search-container">
      <div className="search-options">
        <DorpList
          options={dorpListOptions}
          isSearch
          onSelect={onDorpListSelect}
        />
        <img className="price-icon" src={price} alt="price" />
        <Title className="price-text" level={5}>
          السعر
        </Title>
        <MainInput
          type="rangeSlider"
          width="200px"
          onSliderChange={onSliderChange}
          min={sliderMin}
          max={sliderMax}
        />
      </div>
      <MainInput
        type="search"
        height="52px"
        placeholder="أدخل إسم الروضة"
        onChange={onMainInputChange}
      />
      <MainButton
        className="Search-btn red-Search-btn"
        onClick={onClick}
        height="52px"
        border="1.6px solid #69938F"
        backgroundColor={isRed ? 'var(--main-red)' : 'var(--main-color)'}
      >
        بحث
      </MainButton>
    </div>
  );
};

Search.defaultProps = {
  isRed: false,
  sliderMin: 500,
  sliderMax: 2000,
};

Search.propTypes = {
  dorpListOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSearch: PropTypes.func.isRequired,
  isRed: PropTypes.bool,
  sliderMin: PropTypes.number,
  sliderMax: PropTypes.number,
};

export default Search;
