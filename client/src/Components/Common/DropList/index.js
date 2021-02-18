import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';

import locationIcon from '../../../assets/icons/location.svg';

import './style.css';

const { Option, OptGroup } = Select;

const DropList = ({ options, isSearch, ...otherSelectProps }) => {
  const optionItem = {};

  options.forEach(({ id, location_main: main, location_sub: sub }) => {
    if (!optionItem[main]) optionItem[main] = [];
    optionItem[main].push(
      <Option key={id} value={sub}>
        {sub}
      </Option>
    );
  });

  return (
    <div className="drop-list">
      {isSearch ? <img src={locationIcon} alt="location" /> : null}
      <Select
        placeholder="المنطقة"
        bordered={!isSearch}
        labelInValue
        className={`${isSearch ? 'search-case' : 'request-case'}`}
        {...otherSelectProps}
      >
        <Option key={0} value="كل المنطقة">
          كل المنطقة
        </Option>
        {Object.keys(optionItem).map((oneKey) => (
          <OptGroup key={oneKey} label={oneKey}>
            {optionItem[oneKey]}
          </OptGroup>
        ))}
      </Select>
    </div>
  );
};

DropList.defaultProps = {
  isSearch: false,
};

DropList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      location_main: PropTypes.string,
      location_sub: PropTypes.string,
    })
  ).isRequired,
  isSearch: PropTypes.bool,
};

export default DropList;
