import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { Menu } from 'antd';
import { ReactComponent as Home } from '../../../assets/icons/home.svg';
import { ReactComponent as About } from '../../../assets/icons/about.svg';
import { ReactComponent as Search } from '../../../assets/icons/search.svg';

const NavTap = () => (
  <Menu mode="horizontal" defaultSelectedKeys={['1']}>
    <Menu.Item key="1" icon={<Home className="icon" />}>
      <NavLink exact to="/" className="tap">
        الرئيسية
      </NavLink>
    </Menu.Item>
    <Menu.Item key="2" icon={<About className="icon" />}>
      <NavLink exact to="/about" className="tap">
        حول
      </NavLink>
    </Menu.Item>
    <Menu.Item key="3" icon={<Search className="icon" />}>
      <NavLink exact to="/search" className="tap">
        البحث
      </NavLink>
    </Menu.Item>
  </Menu>
);

export default NavTap;
