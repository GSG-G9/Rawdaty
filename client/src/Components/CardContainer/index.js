import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import Card from '../Common/Card';
import './style.css';

const { Title, Text } = Typography;
const CardContainer = ({ title, data }) => (
  <div>
    <Title level={3} id="container-title">
      {title}
    </Title>
    <div className="container-cards">
      <ul>
        {data.length !== 0 ? (
          data.map((item) => (
            <li>
              <Card {...item} />
            </li>
          ))
        ) : (
          <Text>لم يتم إضافة رياض أطفال.</Text>
        )}
      </ul>
    </div>
  </div>
);
CardContainer.defaultProps = {
  title: ' ',
  data: [
    {
      title: ' ',
      rating: ' ',
      reviewersNo: ' ',
      location: ' ',
      minPrice: ' ',
      maxPrice: ' ',
      cover: ' ',
    },
  ],
};
CardContainer.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      rating: PropTypes.string,
      reviewersNo: PropTypes.string,
      location: PropTypes.string,
      minPrice: PropTypes.string,
      maxPrice: PropTypes.string,
      cover: PropTypes.string,
    })
  ),
};

export default CardContainer;
