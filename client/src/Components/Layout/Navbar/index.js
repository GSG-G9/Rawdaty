import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Image, Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import MainButton from '../../Common/MainButton';
import UserImage from '../../Common/UserImage';
import NavTap from '../../Common/NavTap';
import homedrop from '../../../assets/icons/homedrop.svg';
import logout from '../../../assets/icons/logout.svg';
import './style.css';

const { Text } = Typography;
const { Title } = Typography;

const NavBar = ({ userName, isLogged, image, isAdmin }) => {
  const menu = (
    <Menu id="drop-down">
      <Text className="user-name">{userName}</Text>
      <Menu.Divider />

      <Menu.Item key="1">
        <Link to="!#">
          <Image preview={false} src={homedrop} alt="home" />
          <span className="drop-down-list-span">صفحة الروضة</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="!#">
          <Image preview={false} src={logout} alt="logout" />
          <span className="drop-down-list-span">تسجيل الخروج</span>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="navbar">
      <div className="navbar-logo-div">
        <Title level={1} className="navbar-logo-div-title">
          روضــتـــي
        </Title>
      </div>
      {isAdmin ? (
        <div className="admin-div-name">
          <Title level={5} className="admin-title-name">
            {userName}
          </Title>
          <UserImage
            userName={userName}
            image={image}
            background="var(--main-gray)"
          />
        </div>
      ) : (
        <div className="navbar-taps-div">
          <NavTap />
          <MainButton
            border="3px solid var(--main-color)"
            backgroundColor="var(--main-white)"
            color="#739c98"
            borderRadius="var(--border-radius)"
            className="add-kinderg-btn"
          >
            إضافة روضة
          </MainButton>
          {isLogged && (
            <Dropdown
              id="Drop-down--container"
              overlay={menu}
              trigger={['click']}
            >
              <div className="drop-down-div">
                <UserImage
                  userName={userName}
                  image={image}
                  background="var(--main-gray)"
                />
                <DownOutlined />
              </div>
            </Dropdown>
          )}
        </div>
      )}
    </div>
  );
};

NavBar.defaultProps = {
  isLogged: false,
  image: ' ',
};

NavBar.propTypes = {
  userName: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool,
  image: PropTypes.string,
};

export default NavBar;
