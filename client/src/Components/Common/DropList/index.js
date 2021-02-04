import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';
import locationIcon from './Vector.svg';

const { Option } = Select;

const DropList = ({ options, isSearch, ...otherSelectProps }) => (
  <Select
    labelInValue
    style={{ width: 300, height: 19 }}
    {...otherSelectProps}
    suffixIcon={isSearch ? <img src={locationIcon} alt="location" /> : ''}
  >
    {options.map((option) => (
      <Option key={option.id} value={option.value} disabled={option.disabled}>
        {option.label}
      </Option>
    ))}
  </Select>
);

DropList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  isSearch: PropTypes.bool.isRequired,
};

export default DropList;
