import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import Rating from '../Rating';

import './style.css';

const { Meta } = Card;

const CardComponent = ({
  title,
  rating,
  reviewersNo,
  location,
  minPrice,
  maxPrice,
  cover,
}) => (
  <Card
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
      title={<div className="card-title">{title}</div>}
      description={
        <div>
          <Rating rateValue={rating} />
          <span className="reviewers"> {reviewersNo} مراجعين </span>
          <div className="location-price">
            <span> {location}</span>

            <span>{`${minPrice}-${maxPrice}`} شيكل </span>
          </div>
        </div>
      }
    />
  </Card>
);

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewersNo: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  minPrice: PropTypes.number.isRequired,
  maxPrice: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
};

export default CardComponent;
