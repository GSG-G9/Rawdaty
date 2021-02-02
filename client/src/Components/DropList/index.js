import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';

const { Option } = Select;

function DropList({ options }) {
  return (
    <>
      <Select labelInValue defaultValue={{ value: 1 }} style={{ width: 120 }}>
        {options.map((option) => (
          <Option value={option.value}>{option.label}</Option>
        ))}
      </Select>
    </>
  );
}

DropList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DropList;
