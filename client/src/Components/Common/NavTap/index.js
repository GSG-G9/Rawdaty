import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu, Modal } from 'antd';

import { ReactComponent as Home } from '../../../assets/icons/home.svg';
import { ReactComponent as About } from '../../../assets/icons/about.svg';
import { ReactComponent as Search } from '../../../assets/icons/search.svg';

import './style.css';

const NavTap = ({
  modalChildren,
  onModalCancel,
  isModalVisible,
  ...otherMenuProps
}) => (
  <>
    <Menu mode="horizontal" {...otherMenuProps}>
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
      className="modal"
      modalChildren={modalChildren}
      visible={isModalVisible}
      onCancel={onModalCancel}
      style={{ top: 20 }}
    >
      {modalChildren}
    </Modal>
  </>
);

NavTap.defaultProps = {
  modalChildren: <></>,
  isModalVisible: false,
  onModalCancel: () => {},
};

NavTap.propTypes = {
  modalChildren: PropTypes.element,
  isModalVisible: PropTypes.bool,
  onModalCancel: PropTypes.func,
};

export default NavTap;
