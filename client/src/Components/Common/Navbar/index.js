import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
// import MainButton from '../MainButton';
import userImage from '../UserImage';
import './style.css';

function Navbar({ userName }) {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <p>{userName}</p>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">صفحة الروضة</a>
      </Menu.Item>

      <Menu.Item key="3">تسجيل الخروج</Menu.Item>
    </Menu>
  );
  return (
    <div className="navbar">
      <div className="navbar-logo-div">
        <h1>روضــتـــي</h1>
      </div>
      <div className="navbar-taps-div">
        <div>ComponComponentComponentComponentComponentComponent</div>
        <Dropdown overlay={menu} trigger={['click']}>
          <userImage
            userName="أﻻء"
            image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fuser&psig=AOvVaw19J8tildYKlGwawGrQb_Hs&ust=1612723904942000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjDxe721e4CFQAAAAAdAAAAABAD"
          />
          <DownOutlined />
        </Dropdown>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  userName: PropTypes.string.isRequired,
};
export default Navbar;
