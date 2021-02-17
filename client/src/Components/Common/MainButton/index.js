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
  htmlType,
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
    htmlType={htmlType}
  >
    {children}
  </Button>
);

MainButton.defaultProps = {
  onClick: () => {},
  children: 'إرسال',
  backgroundColor: 'var(--main-color)',
  border: 'var(--button-border)',
  color: 'var(--main-white)',
  isDelete: false,
  size: 'large',
  id: '',
  className: '',
  htmlType: '',
};

MainButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  isDelete: PropTypes.bool,
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  htmlType: PropTypes.string,
};

export default MainButton;
