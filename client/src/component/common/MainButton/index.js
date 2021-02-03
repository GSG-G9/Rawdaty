import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const MainButton = ({
  onClick,
  children,
  backgroundColor,
  border,
  color,
  padding,
}) => (
  <Button
    type="primary"
    size="large"
    onClick={onClick}
    style={{ backgroundColor, border, color, padding }}
  >
    {children}
  </Button>
);
MainButton.propTypes = {
  onClick: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired,
};
export default MainButton;
