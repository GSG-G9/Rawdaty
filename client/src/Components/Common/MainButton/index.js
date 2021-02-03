import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const MainButton = ({
  onClick,
  children,
  isDelete,
  size,
  id,
  className,
  ...otherStyleProps
}) => (
  <Button
    id={id}
    className={className}
    type="primary"
    size={size}
    onClick={onClick}
    style={!isDelete ? { ...otherStyleProps } : null}
    danger={isDelete}
  >
    {children}
  </Button>
);

MainButton.defaultProps = {
  children: 'إرسال',
  backgroundColor: 'var(--main-color)',
  border: 'var(--button-border)',
  color: 'var(--main-white)',
  isDelete: false,
  size: 'large',
  id: '',
  className: '',
};

MainButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
  isDelete: PropTypes.bool,
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
};

export default MainButton;
