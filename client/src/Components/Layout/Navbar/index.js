import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Image, Typography, Modal } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import usePrevious from '../../../utils/usePrevious';

import MainButton from '../../Common/MainButton';
import UserImage from '../../Common/UserImage';
import NavTap from '../../Common/NavTap';
import Search from '../../Search';
import logoutIcon from '../../../assets/icons/logout.svg';
import AuthContext from '../../../Context/AuthContext';
import LogoutContext from '../../../Context/LogoutContext';

import './style.css';

const { Title } = Typography;
const { SubMenu } = Menu;

const NavBar = () => {
  const location = useHistory();
  const { pathname } = useLocation();
  const [selectedNavTapKey, setSelectedNavTapKey] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

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

  const handleAddModalOk = () => {
    setIsAddModalVisible(false);
  };

  const handleAddModalCancel = () => {
    setIsAddModalVisible(false);
  };

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

  const modalChildren = <Search onSearch={onSearchHandler} isRed />;

  return (
    <AuthContext.Consumer>
      {({ role, userData: { user_name: userName, kindergartensData } }) => (
        <LogoutContext.Consumer>
          {({ logout }) => {
            const MainButtonHandler = () => {
              if (role) {
                setIsAddModalVisible(true);
              } else {
                location.push('/login');
              }
            };

            const menu = (
              <Menu>
                <Menu.ItemGroup title={userName}>
                  <Menu.Divider />
                  <SubMenu title="الروضة الخاصة بك">
                    {kindergartensData &&
                      kindergartensData.length !== 0 &&
                      kindergartensData.map(
                        ({ id, kindergarten_name: name }) => (
                          <Menu.Item key={id} className="drop-down-list-span">
                            <Link to={`/kindergarten/${id}`}>{name}</Link>
                          </Menu.Item>
                        )
                      )}
                  </SubMenu>
                  <Menu.Item key="2" onClick={logout}>
                    <Image preview={false} src={logoutIcon} alt="logout" />
                    <span className="drop-down-list-span">تسجيل الخروج</span>
                  </Menu.Item>
                </Menu.ItemGroup>
              </Menu>
            );
            return (
              <>
                <div className="navbar">
                  <div className="navbar-logo-div">
                    <NavLink to="/" className="navbar-logo-div-title">
                      روضــتـــي
                    </NavLink>
                  </div>
                  {role === 'admin' && pathname.includes('/dashboard') ? (
                    <div className="admin-div-name">
                      <Title level={5} className="admin-title-name">
                        {userName}
                      </Title>
                      <UserImage
                        userName={userName}
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
                        onClick={MainButtonHandler}
                      >
                        {role ? 'إضافة روضة' : 'تسجيل الدخول'}
                      </MainButton>
                      {role && (
                        <Dropdown
                          id="Drop-down--container"
                          overlay={menu}
                          trigger={['click']}
                        >
                          <div className="drop-down-div">
                            <UserImage
                              userName={userName}
                              background="var(--main-gray)"
                            />
                            <DownOutlined />
                          </div>
                        </Dropdown>
                      )}
                    </div>
                  )}
                </div>
                <Modal
                  title="Basic Modal"
                  visible={isAddModalVisible}
                  onOk={handleAddModalOk}
                  onCancel={handleAddModalCancel}
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
              </>
            );
          }}
        </LogoutContext.Consumer>
      )}
    </AuthContext.Consumer>
  );
};

export default NavBar;
