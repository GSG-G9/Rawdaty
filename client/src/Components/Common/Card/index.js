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
      title={<h2 className="card-title">{title}</h2>}
      description={
        <div>
          <Rating rateValue={rating} />
          <h3 className="reviewers"> {reviewersNo} مراجعات </h3>
          <div className="location-price">
            <h3> {location}</h3>
            <h3>{`${minPrice}-${maxPrice}`} شيكل </h3>
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
