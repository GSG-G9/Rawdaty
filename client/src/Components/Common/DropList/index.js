import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';
import locationIcon from '../../../assets/icons/location.svg';
import './style.css';

const { Option } = Select;

const DropList = ({ options, isSearch, ...otherSelectProps }) => (
  <div className="drop-list">
    {isSearch ? <img src={locationIcon} alt="location" /> : null}
    <Select
      placeholder="المنطقة"
      bordered={!isSearch}
      labelInValue
      style={isSearch ? { width: 110, height: 25 } : { width: 150, height: 25 }}
      {...otherSelectProps}
    >
      {options.map((option) => (
        <Option key={option.id} value={option.value} disabled={option.disabled}>
          {option.label}
        </Option>
      ))}
    </Select>
  </div>
);

DropList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  isSearch: PropTypes.bool.isRequired,
};

export default DropList;
