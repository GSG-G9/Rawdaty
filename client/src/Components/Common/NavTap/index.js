import React from 'react';
// import PropTypes from 'prop-types';
import './style.css';
import { Radio } from 'antd';
import { ReactComponent as Home } from '../../../assets/icons/home.svg';
import { ReactComponent as About } from '../../../assets/icons/about.svg';
import { ReactComponent as Search } from '../../../assets/icons/search.svg';

const NavTap = () => (
  <Radio.Group buttonStyle="solid">
    <Radio.Button value="1">
      <Home className="home" />
      الرئيسية
    </Radio.Button>
    <Radio.Button value="2">
      <About className="about" />
      حول
    </Radio.Button>
    <Radio.Button value="3">
      <Search className="search" />
      البحث
    </Radio.Button>
  </Radio.Group>
);
// NavTap.propTypes = { text: PropTypes.string.isRequired };

export default NavTap;
