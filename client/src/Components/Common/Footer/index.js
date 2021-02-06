import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

import facebook from './assets/icons/facebook.svg';
import instagram from './assets/icons/instagram.svg';
import twitter from './assets/icons/twitter.svg';

import './style.css';

const { Footer } = Layout;
const FooterComponent = () => (
  <Footer className="footer" style={{ padding: '0' }}>
    <span className="icons">
      <Link to={{ pathname: 'https://www.instagram.com/' }} target="_blank">
        <img src={instagram} alt="instagram" className="icon" />
      </Link>
      <Link to={{ pathname: 'https://twitter.com/' }} target="_blank">
        <img src={twitter} alt="twitter" className="icon" />
      </Link>
      <Link to={{ pathname: 'https://www.facebook.com/' }} target="_blank">
        <img src={facebook} alt="facebook" className="icon" />
      </Link>
      <span className="copy-write"> جميع الحقوق محفوظة2021Ⓒ</span>
    </span>
  </Footer>
);

export default FooterComponent;
