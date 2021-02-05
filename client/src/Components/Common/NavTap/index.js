import React from 'react';
// import PropTypes from 'prop-types';
import './style.css';

import { Radio } from 'antd';

const NavTap = () => (
  <Radio.Group buttonStyle="solid">
    <Radio.Button
      className="ant-radio-group-solid, ::selection "
      style={{
        width: 110,
        textAlign: 'center',
      }}
      value={1}
    >
      الرئيسية
    </Radio.Button>
  </Radio.Group>
);
// NavTap.propTypes = {};

export default NavTap;
