import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

import './style.css';

const MainInput = ({ type, width, height, placeholder }) => {
  const { TextArea } = Input;
  const style = { width, height };

  switch (type) {
    case 'text':
      return <Input placeholder={placeholder} style={style} />;
    case 'textArea':
      return (
        <TextArea
          placeholder={placeholder}
          autoSize={{ minRows: 3, maxRows: 5 }}
          style={style}
        />
      );
    default:
      return <></>;
  }
};

MainInput.defaultProps = {
  width: '240px',
  height: '28px',
  placeholder: '',
};

MainInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default MainInput;
