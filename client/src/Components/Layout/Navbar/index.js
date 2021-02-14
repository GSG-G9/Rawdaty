import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Image, Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import usePrevious from '../../../utils/usePrevious';

import MainButton from '../../Common/MainButton';
import UserImage from '../../Common/UserImage';
import NavTap from '../../Common/NavTap';
import homeDrop from '../../../assets/icons/homeDrop.svg';
import logout from '../../../assets/icons/logout.svg';
import Search from '../../Search';

import './style.css';

const { Text, Title } = Typography;

const NavBar = ({ userName, isLogged, image, isAdmin }) => {
  const [selectedNavTapKey, setSelectedNavTapKey] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { pathname } = useHistory().location;

  const prevSelectedNavTapKey = usePrevious(selectedNavTapKey);

  useEffect(() => {
    switch (pathname) {
      case '/':
        setSelectedNavTapKey(['1']);
        break;
      case '/about':
        setSelectedNavTapKey(['2']);
        break;
      case '/search':
        setSelectedNavTapKey(['3']);
        break;
      default:
        break;
    }
  }, []);

  const handleCancel = () => {
    setSelectedNavTapKey(prevSelectedNavTapKey);
    setIsModalVisible(false);
  };

  const onSearchHandler = () => {
    setIsModalVisible(false);
  };

  const handleMenu = (val) => {
    if (val.key === '3') {
      setIsModalVisible(true);
    }
    setSelectedNavTapKey([val.key]);
  };

  const menu = (
    <Menu id="drop-down">
      <Text className="user-name">{userName}</Text>
      <Menu.Divider />

      <Menu.Item key="1">
        <Link to="!#">
          <Image preview={false} src={homeDrop} alt="home" />
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

  const modalChildren = <Search onSearch={onSearchHandler} isRed />;

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
          <NavTap
            onSelect={handleMenu}
            selectedKeys={selectedNavTapKey}
            modalChildren={modalChildren}
            isModalVisible={isModalVisible}
            onModalCancel={handleCancel}
          />
          <MainButton
            border="3px solid var(--main-color)"
            backgroundColor="var(--main-white)"
            color="#739c98"
            borderRadius="var(--border-radius)"
            className="add-kinderg-btn"
            onClick={() => {}}
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
