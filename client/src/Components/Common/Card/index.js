import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import Rating from '../Rating';

const { Meta } = Card;

const CardComponent = ({
  title,
  rating,
  reviewersNo,
  location,
  price,
  cover,
}) => (
  <Card
    hoverable
    style={{ width: 300 }}
    cover={<img alt={title} src={cover} />}
  >
    <Meta
      title={title}
      description={
        <div>
          <Rating rateValue={rating} />
          <span> {reviewersNo} مراجعين </span>
          <div>
            <span> {location}</span>
            <span />
            <span>{price}</span>
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
  price: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};
export default CardComponent;
