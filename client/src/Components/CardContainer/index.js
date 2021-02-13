import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Empty } from 'antd';

import Card from '../Common/Card';
import './style.css';

const { Title } = Typography;

const CardContainer = ({ data, searchText }) => (
  <div>
    <Title level={3} id="container-title">
      {searchText ? `نتائج البحث عن: ${searchText}` : `أفضل رياض الأطفال`}
    </Title>
    <div className="container-cards">
      <ul>
        {data.length !== 0 ? (
          data.map((item) => (
            <li key={item.id}>
              <Card
                id={item.id}
                title={item.kindergarten_name}
                rating={parseFloat(item.rating_average)}
                reviewersNo={parseFloat(item.rating_count)}
                location={item.location_sub}
                minPrice={item.min_price}
                maxPrice={item.max_price}
                cover={item.cover_image}
              />
            </li>
          ))
        ) : (
          <Empty description="لا يوجد رياض أطفال" />
        )}
      </ul>
    </div>
  </div>
);

CardContainer.defaultProps = {
  searchText: '',
  data: [],
};

CardContainer.propTypes = {
  searchText: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      rating: PropTypes.number,
      reviewersNo: PropTypes.number,
      location: PropTypes.string,
      minPrice: PropTypes.number,
      maxPrice: PropTypes.number,
      cover: PropTypes.string,
    })
  ),
};

export default CardContainer;
