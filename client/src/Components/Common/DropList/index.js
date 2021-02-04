import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';
import locationIcon from './Vector.svg';

const { Option } = Select;

const DropList = ({ options, isSearch, ...otherSelectProps }) => (
  <>
    {isSearch ? <img src={locationIcon} alt="location" /> : null}
    <Select
      bordered={!isSearch}
      labelInValue
      style={isSearch ? { width: 110 } : { width: 150 }}
      {...otherSelectProps}
    >
      {options.map((option) => (
        <Option key={option.id} value={option.value} disabled={option.disabled}>
          {option.label}
        </Option>
      ))}
    </Select>
  </>
);

DropList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  isSearch: PropTypes.bool.isRequired,
};

export default DropList;
