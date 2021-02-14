import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, Empty, Pagination } from 'antd';

import Card from '../Common/Card';
import './style.css';

const { Title } = Typography;

const CardContainer = ({ data, searchText }) => {
  const numEachPage = 9;
  const [limit, setLimit] = useState([0, numEachPage]);

  return (
    <div>
      <Title level={3} id="container-title">
        {searchText ? `نتائج البحث عن: ${searchText}` : `أفضل رياض الأطفال`}
      </Title>
      <div className="container-cards">
        <ul>
          {data.length !== 0 ? (
            data.slice(limit[0], limit[1]).map((item) => (
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
        <Pagination
          total={data.length}
          onChange={(value) => {
            setLimit([(value - 1) * numEachPage, value * numEachPage]);
          }}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

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
