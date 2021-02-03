import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const MainButton = ({ onClick, children, ...otherStyleProps }) => (
  <Button
    type="primary"
    size="large"
    onClick={onClick}
    style={{ ...otherStyleProps }}
  >
    {children}
  </Button>
);
MainButton.defaultProps = {
  backgroundColor: '#739C98',
  border: '3px solid #69938F',
  color: '#fff',
  padding: '0px 15px',
  onClick: () => {},
};

MainButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
  color: PropTypes.string,
  padding: PropTypes.string,
};
export default MainButton;
