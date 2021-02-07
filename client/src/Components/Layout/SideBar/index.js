import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu, Typography } from 'antd';
import {
  AppstoreAddOutlined,
  UnorderedListOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

import './style.css';

const { Title } = Typography;

const SideBar = ({ onClick }) => (
  <div className="side-Bar">
    <Title id="title" level={2}>
      لوحة التحكم
    </Title>

    <Menu id="menu" onClick={onClick}>
      <Menu.Item key="1" icon={<UnorderedListOutlined />}>
        كل الروضات
      </Menu.Item>
      <Menu.Item key="2" icon={<AppstoreAddOutlined />}>
        إضافة روضة
      </Menu.Item>
      <Menu.Item key="3" icon={<NotificationOutlined />}>
        الإشعارات
      </Menu.Item>
    </Menu>

    <Link id="log-out" to="/">
      سجيل الخروج
    </Link>
  </div>
);

SideBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SideBar;
