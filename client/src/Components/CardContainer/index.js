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
              <Card {...item} />
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
