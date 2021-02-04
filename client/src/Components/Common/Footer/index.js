import React from 'react';
import { Layout } from 'antd';
import {
  FacebookOutlined,
  TwitterCircleFilled,
  InstagramFilled,
  createFromIconfontCN,
} from '@ant-design/icons';
import facebook from './assests/icons/facebook.svg';
import instagram from './assests/icons/instagram.svg';
import twitter from './assests/icons/twitter.svg';

import './style.css';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const { Footer } = Layout;
const FooterComponent = () => (
  <Footer className="footer">
    <FacebookOutlined className="facebook-icon" />
    <IconFont type="icon-facebook" />
    <InstagramFilled />
    <img src={facebook} alt="facebook" />
    <div
      className="instagram-icon"
      style={{ backgroundImage: `url(${instagram})` }}
    />
    <img src={instagram} alt="facebook" className="instagram-icon" />
    <img src={twitter} alt="facebook" />
    <TwitterCircleFilled />
  </Footer>
);

export default FooterComponent;
