import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu, Modal } from 'antd';
import usePrevious from '../../../utils/usePrevious';

import { ReactComponent as Home } from '../../../assets/icons/home.svg';
import { ReactComponent as About } from '../../../assets/icons/about.svg';
import { ReactComponent as Search } from '../../../assets/icons/search.svg';

import './style.css';

const NavTap = ({ modalChildren }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedKey, setSelectedKey] = useState([]);

  const prevSelectedKey = usePrevious(selectedKey);
  const { pathname } = useHistory().location;

  useEffect(() => {
    switch (pathname) {
      case '/':
        setSelectedKey(['1']);
        break;
      case '/about':
        setSelectedKey(['2']);
        break;
      default:
        break;
    }
  }, []);

  const handleMenu = (val) => {
    if (val.key === '3') {
      setIsModalVisible(true);
    }
    setSelectedKey([val.key]);
  };

  const handleCancel = () => {
    setSelectedKey(prevSelectedKey);
    setIsModalVisible(false);
  };

  return (
    <>
      <Menu
        mode="horizontal"
        selectedKeys={selectedKey}
        defaultSelectedKeys={['1']}
        onSelect={handleMenu}
      >
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
          البحث
        </Menu.Item>
      </Menu>

      <Modal
        style={{ top: 20 }}
        visible={isModalVisible}
        onCancel={handleCancel}
        className="modal"
      >
        {modalChildren}
      </Modal>
    </>
  );
};

NavTap.defaultProps = {
  modalChildren: <></>,
};

NavTap.propTypes = {
  modalChildren: PropTypes.string,
};

export default NavTap;
