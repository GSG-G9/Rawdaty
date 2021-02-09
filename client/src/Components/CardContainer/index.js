import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

import Card from '../Common/Card';
import './style.css';

const { Title, Empty } = Typography;

const CardContainer = ({ title, data, searchText }) => (
  <div>
    <Title level={3} id="container-title">
      {title}
      {searchText && <span className="search-text">{searchText}</span>}
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
          <Empty description="لم يتم إضافة أي رياض أطفال" />
        )}
      </ul>
    </div>
  </div>
);

CardContainer.defaultProps = {
  title: '',
  searchText: '',
  data: [],
};

CardContainer.propTypes = {
  title: PropTypes.string,
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
