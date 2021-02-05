import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
// import PropTypes from 'prop-types';
import MainButton from '../MainButton';

import './style.css';

function Navbar() {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
  return (
    <div className="navbar">
      <div className="navbar-logo-div">
        <h1>روضــتـــي</h1>
      </div>
      <div className="navbar-taps-div">
        <div>Component</div>
        <MainButton
          backgroundColor="#fff"
          color="#739c98"
          border="2px solid #739c98"
        >
          إضافة روضة
        </MainButton>
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Click me <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </div>
  );
}
// Navbar.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
export default Navbar;
