import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';

const { Option } = Select;

function DropList({ options }) {
  return (
    <Select labelInValue defaultValue={{ value: 1 }} style={{ width: 130 }}>
      {options.map((option) => (
        <Option value={option.value}>{option.label}</Option>
      ))}
    </Select>
  );
}

DropList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DropList;
