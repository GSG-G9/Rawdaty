import React from 'react';
import { Avatar } from 'antd';
import PropTypes from 'prop-types';

import './style.css';

const UserImage = ({ userName, image, background, fontSize, color }) => (
  <Avatar
    size={45}
    className="user-image"
    style={{ background, fontSize, color }}
    src={image || ' '}
  >
    {image && userName.charAt(0)}
  </Avatar>
);

UserImage.defaultProps = {
  background: '#B76E6E',
  fontSize: '20px',
  color: '#fff',
  image: ' ',
};

UserImage.propTypes = {
  userName: PropTypes.string.isRequired,
  image: PropTypes.string,
  background: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
};

export default UserImage;
