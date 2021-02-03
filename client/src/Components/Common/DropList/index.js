import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';

const { Option } = Select;

const DropList = ({ options, onChange }) => (
  <Select
    onChange={onChange}
    labelInValue
    defaultValue={{ value: 1 }}
    style={{ width: 130 }}
  >
    {options.map((option) => (
      <Option value={option.value} disabled={option.disabled}>
        {option.label}
      </Option>
    ))}
  </Select>
);

DropList.defaultProps = {
  onChange: () => {},
};

DropList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func,
};

export default DropList;
