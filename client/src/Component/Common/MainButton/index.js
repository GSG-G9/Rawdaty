import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const MainButton = ({ onClick, children, isDelete, ...otherStyleProps }) => (
  <Button
    type="primary"
    size="large"
    onClick={onClick}
    style={!isDelete ? { ...otherStyleProps } : null}
    danger={isDelete}
  >
    {children}
  </Button>
);
MainButton.defaultProps = {
  backgroundColor: 'var(--main-color)',
  border: 'var(--button-border)',
  color: 'var(--main-white)',
  onClick: () => {},
  isDelete: false,
};

MainButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  isDelete: PropTypes.bool,
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
  color: PropTypes.string,
};
export default MainButton;
