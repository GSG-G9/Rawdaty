import React from 'react';
// import PropTypes from 'prop-types';

import { Radio } from 'antd';

const NavTap = () => (
  <Radio.Group buttonStyle="solid">
    <Radio.Button
      style={{
        width: 120,
        textAlign: 'center',
        marginRight: '5px',
      }}
      value={1}
    >
      الرئيسية
    </Radio.Button>
  </Radio.Group>
);
// NavTap.propTypes = {};

export default NavTap;
