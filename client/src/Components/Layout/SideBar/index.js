import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu, Typography, Button } from 'antd';
import {
  AppstoreAddOutlined,
  UnorderedListOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

import './style.css';

const { Title } = Typography;
const { Item } = Menu;

const SideBar = ({ onClick, onLogout }) => {
  const history = useHistory();

  const handleItemClick = (to) => {
    history.push(to);
  };

  const handleLogout = () => {
    if (typeof onLogout !== 'function') return;

    // handle logout logic
    onLogout();
    history.push('/');
  };

  const items = [
    {
      name: 'كل الروضات',
      key: '1',
      to: '/dashboard/all',
      icon: <UnorderedListOutlined />,
    },
    {
      name: 'إضافة روضة',
      key: '2',
      to: '/dashboard/add',
      icon: <AppstoreAddOutlined />,
    },
    {
      name: 'الإشعارات',
      key: '3',
      to: '/dashboard/notification',
      icon: <NotificationOutlined />,
    },
  ];

  return (
    <div className="side-Bar">
      <Title id="title" level={2}>
        لوحة التحكم
      </Title>

      <Menu id="menu" onClick={onClick}>
        {items.map(({ key, icon, to, name }) => (
          <Item key={key} icon={icon} onClick={() => handleItemClick(to)}>
            {name}
          </Item>
        ))}
      </Menu>

      <Button id="log-out" type="link" onClick={handleLogout}>
        تسجيل الخروج
      </Button>
    </div>
  );
};

SideBar.defaultProps = {
  onClick: () => {},
};

SideBar.propTypes = {
  onLogout: PropTypes.func.isRequired,
  onClick: PropTypes.func,
};

export default SideBar;
