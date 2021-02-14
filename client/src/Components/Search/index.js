import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Image, notification } from 'antd';
import PropTypes from 'prop-types';
import axios from 'axios';

import DorpList from '../Common/DropList';
import MainInput from '../Common/MainInput';
import MainButton from '../Common/MainButton';
import price from '../../assets/icons/price.svg';
import createSearchUrl from '../../utils/createSearchUrl';

import './style.css';

const { Title } = Typography;

const Search = ({ isRed, sliderMin, sliderMax, onSearch }) => {
  const history = useHistory();
  const [selectValue, setSelectValue] = useState('');
  const [sliderValue, setSliderValue] = useState([500, 2000]);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);

  const onClick = () => {
    onSearch();
    history.push(
      createSearchUrl(inputValue, sliderValue[0], sliderValue[1], selectValue)
    );
  };

  const onDorpListSelect = (val) => {
    if (val.key !== 'كل المنطقة') {
      setSelectValue(
        options.filter((data) => data.location_sub === val.key)[0].id
      );
    } else {
      setSelectValue('');
    }
  };

  const onSliderChange = (val) => {
    setSliderValue(val);
  };

  const onMainInputChange = (e) => {
    setInputValue(e.target.value);
  };

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

  return (
    <div className="search-container">
      <div className="search-options">
        <DorpList options={options} isSearch onChange={onDorpListSelect} />
        <Image className="price-icon" src={price} alt="price" preview={false} />
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
      <div className="input-container">
        <MainInput
          type="search"
          height="52px"
          placeholder="أدخل اسم الروضة"
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
    </div>
  );
};

Search.defaultProps = {
  isRed: false,
  sliderMin: 500,
  sliderMax: 2000,
  onSearch: () => {},
};

Search.propTypes = {
  isRed: PropTypes.bool,
  sliderMin: PropTypes.number,
  sliderMax: PropTypes.number,
  onSearch: PropTypes.func,
};

export default Search;
