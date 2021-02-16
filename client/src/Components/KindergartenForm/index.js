import React, { useState } from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';

import MainInput from '../Common/MainInput';
import MainButton from '../Common/MainButton';

const { Title } = Typography;

const KindergartenForm = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const onClick = () => {
    onAdd(inputValue);
  };

  const onMainInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <Title className="price-text" level={5}>
        اضافة روضة
      </Title>
      <hr />
      <h3>
        اسم الروضة:
        <MainInput
          type="text"
          height="48px"
          width="471px"
          onChange={onMainInputChange}
        />
      </h3>
      <MainButton
        className="Search-btn red-Search-btn"
        onClick={onClick}
        height="52px"
        width="122px"
        border="1.6px solid #69938F"
        backgroundColor="var(--main-color)"
      >
        إضافة
      </MainButton>
      <MainButton
        className="Search-btn red-Search-btn"
        onClick={onClick}
        height="52px"
        width="122px"
        border="1.6px solid #69938F"
        backgroundColor="#FFF"
        color="#000"
      >
        تجاهل
      </MainButton>
    </div>
  );
};

export default KindergartenForm;

KindergartenForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
