import React from 'react';
import './style.css';
import { Radio } from 'antd';
import { ReactComponent as Home } from '../../../assets/icons/home.svg';

const NavTap = () => (
  <Radio.Group buttonStyle="solid">
    <Radio.Button
      style={{
        width: 110,
        textAlign: 'center',
      }}
      value="1"
    >
      <Home className="home" />
      الرئيسية
    </Radio.Button>
  </Radio.Group>
);
export default NavTap;
