import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import Rating from '../Rating';

import './style.css';

const { Meta } = Card;

const CardComponent = ({
  id,
  title,
  rating,
  reviewersNo,
  subLocation,
  mainLocation,
  minPrice,
  maxPrice,
  cover,
}) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/kindergarten/${id}`);
  };

  return (
    <Card
      onClick={handleClick}
      hoverable
      className="card"
      cover={
        <div
          className="card-cover"
          style={{ backgroundImage: `url(${cover})` }}
        />
      }
    >
      <Meta
        title={<h2 className="card-title">{title}</h2>}
        description={
          <div>
            <Rating rateValue={rating} />
            <h3 className="reviewers"> {reviewersNo} مراجعات </h3>
            <div className="location-price">
              <h3> {`${mainLocation} - ${subLocation}`}</h3>
              <h3>{`${minPrice}-${maxPrice}`} شيكل </h3>
            </div>
          </div>
        }
      />
    </Card>
  );
};

CardComponent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewersNo: PropTypes.number.isRequired,
  subLocation: PropTypes.string.isRequired,
  mainLocation: PropTypes.string.isRequired,
  minPrice: PropTypes.number.isRequired,
  maxPrice: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
};

export default CardComponent;
