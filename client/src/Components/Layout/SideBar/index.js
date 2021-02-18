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
import LogoutContext from '../../../Context/LogoutContext';

const { Title } = Typography;
const { Item } = Menu;

const SideBar = ({ onClick }) => {
  const history = useHistory();

  const handleItemClick = (to) => {
    history.push(to);
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
    <LogoutContext.Consumer>
      {({ logout }) => (
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

          <Button id="log-out" type="link" onClick={logout}>
            تسجيل الخروج
          </Button>
        </div>
      )}
    </LogoutContext.Consumer>
  );
};

SideBar.defaultProps = {
  onClick: () => {},
};

SideBar.propTypes = {
  onClick: PropTypes.func,
};

export default SideBar;
