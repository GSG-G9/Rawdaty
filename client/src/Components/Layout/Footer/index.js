import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Image } from 'antd';

import facebook from '../../../assets/icons/facebook.svg';
import instagram from '../../../assets/icons/instagram.svg';
import twitter from '../../../assets/icons/twitter.svg';

import './style.css';

const { Title } = Typography;
const Footer = () => (
  <div id="footer">
    <div className="icons-container">
      <Link to={{ pathname: 'https://www.instagram.com/' }} target="_blank">
        <Image
          preview={false}
          src={instagram}
          alt="instagram"
          className="icon"
        />
      </Link>
      <Link to={{ pathname: 'https://twitter.com/' }} target="_blank">
        <Image preview={false} src={twitter} alt="twitter" className="icon" />
      </Link>
      <Link to={{ pathname: 'https://www.facebook.com/' }} target="_blank">
        <Image preview={false} src={facebook} alt="facebook" className="icon" />
      </Link>
    </div>
    <Title level={5} className="copy-write" style={{ color: '#FFFFFF' }}>
      جميع الحقوق محفوظة &copy; 2021
    </Title>
  </div>
);
export default Footer;
