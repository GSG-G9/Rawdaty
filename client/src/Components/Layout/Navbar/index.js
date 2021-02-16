import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Menu, Dropdown, Image, Typography, Modal } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import MainButton from '../../Common/MainButton';
import UserImage from '../../Common/UserImage';
import NavTap from '../../Common/NavTap';
// import homedrop from '../../../assets/icons/homedrop.svg';
import logout from '../../../assets/icons/logout.svg';
import AuthContext from '../../../Context/AuthContext';

import './style.css';

const { Text, Title } = Typography;
const { SubMenu } = Menu;

const NavBar = () => {
  const location = useHistory();
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const handleAddModalOk = () => {
    setIsAddModalVisible(false);
  };

  const handleAddModalCancel = () => {
    setIsAddModalVisible(false);
  };

  return (
    <AuthContext.Consumer>
      {({ role, userData: { user_name: userName, kindergartensData } }) => {
        const MainButtonHandler = () => {
          if (role) {
            setIsAddModalVisible(true);
          } else {
            location.push('/login');
          }
        };
        const menu = (
          <Menu id="drop-down">
            <Text className="user-name">{userName}</Text>
            <Menu.Divider />

            {/* <Menu.Item key="1"> */}
            <SubMenu title="الروضة الخاصة بك">
              {kindergartensData &&
                kindergartensData.map(({ id, kindergarten_name: name }) => (
                  <>
                    <Menu.Item key={id} className="drop-down-list-span">
                      <Link to={`/profile/${id}`}>{name}</Link>
                    </Menu.Item>
                  </>
                ))}
            </SubMenu>
            <Menu.Item key="2">
              <Link to="!#">
                <Image preview={false} src={logout} alt="logout" />
                <span className="drop-down-list-span">تسجيل الخروج</span>
              </Link>
            </Menu.Item>
          </Menu>
        );

        return (
          <>
            <div className="navbar">
              <div className="navbar-logo-div">
                <Title level={1} className="navbar-logo-div-title">
                  روضــتـــي
                </Title>
              </div>
              {role === 'admin' ? (
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
                  <NavTap />
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
    </AuthContext.Consumer>
  );
};

export default NavBar;
