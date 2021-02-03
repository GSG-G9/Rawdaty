import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';

const Rating = ({ rateValue, setRating }) => {
  const [value, setValue] = useState(0);
  const desc = ['رهيب', 'سيء', 'عادي', 'جيد', 'رائع'];

  const handleChange = (val) => {
    setValue(val);
    setRating(val);
  };

  return (
    <span>
      {rateValue === -1 ? (
        <Rate tooltips={desc} onChange={handleChange} value={value} />
      ) : (
        <Rate disabled value={rateValue} />
      )}
    </span>
  );
};

Rating.defaultProps = {
  rateValue: -1,
  setRating: () => {},
};

Rating.propTypes = {
  rateValue: PropTypes.number,
  setRating: PropTypes.func,
};

export default Rating;
