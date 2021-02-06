import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

import DorpList from '../DropList';
import MainInput from '../MainInput';
import MainButton from '../MainButton';
import price from '../../../assets/icons/price.svg';

import './style.css';

const { Title } = Typography;

const Search = ({ options, onClick }) => {
  console.log(options);
  return (
    <div className="search-container">
      <div className="search-options">
        <DorpList options={options} isSearch />
        <img className="price-icon" src={price} alt="price" />
        <Title className="price-text" level={5}>
          السعر
        </Title>
        <MainInput type="rangeSlider" width="200px" />
      </div>
      <MainInput type="search" height="52px" placeholder="أدخل إسم الروضة" />
      <MainButton
        onClick={onClick}
        height="52px"
        border="1.6px solid var(--main-gray)"
      >
        بحث
      </MainButton>
    </div>
  );
};

Search.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Search;
