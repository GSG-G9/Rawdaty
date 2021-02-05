import React from 'react';
import { Link } from 'react-router-dom';
import {
  FacebookFilled,
  InstagramFilled,
  TwitterSquareFilled,
} from '@ant-design/icons';

import './style.css';

const FooterComponent = () => (
  <div className="footer">
    <span className="icons">
      <Link to={{ pathname: 'https://www.instagram.com/' }} target="_blank">
        <InstagramFilled className="icon" />
      </Link>
      <Link to={{ pathname: 'https://twitter.com/' }} target="_blank">
        <TwitterSquareFilled className="icon" />{' '}
      </Link>
      <Link to={{ pathname: 'https://www.facebook.com/' }} target="_blank">
        <FacebookFilled className="icon" />{' '}
      </Link>
    </span>
    <span className="copy-write">جميع الحقوق محفوظة 2021Ⓒ</span>
  </div>
);

export default FooterComponent;
