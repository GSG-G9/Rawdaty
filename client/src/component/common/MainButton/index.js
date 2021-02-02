import React from 'react';
import './style.css';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const MainButton = ({
  backgroundColor,
  border,
  color,
  padding,
  Buttontext,
}) => (
  <div>
    <Button
      type="primary"
      size="large"
      style={{ backgroundColor, border, color, padding }}
    >
      {Buttontext}
    </Button>
  </div>
);
MainButton.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired,
  Buttontext: PropTypes.string.isRequired,
};
export default MainButton;
