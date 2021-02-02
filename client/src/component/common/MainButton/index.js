import React from 'react';
import './style.css';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const MainButton = (props) => {
  const { backgroundColor } = props;
  const { border } = props;
  const { color } = props;
  const { padding } = props;
  return (
    <div>
      <Button
        type="primary"
        size="large"
        style={{ backgroundColor, border, color, padding }}
      >
        Primary
      </Button>
    </div>
  );
};
MainButton.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired,
};
export default MainButton;
