import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Header = ({ title }) => (
  <div className="header_image">
    <p className="header_title"> {title} </p>
  </div>
);
export default Header;

Header.defaultProps = {
  title: '',
};

Header.propTypes = {
  title: PropTypes.string,
};
