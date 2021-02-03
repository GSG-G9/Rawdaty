import React from 'react';
// import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import Rating from '../Rating';

const { Meta } = Card;
const CardComponent = () => (
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      title="روضة الفجر النموذجية"
      description={
        <div>
          <Rating rateValue={3} />
          <div>
            <span> غزة-فلسطين</span>
            <span />
            <span>200-500 شيكل</span>
          </div>
        </div>
      }
    />
  </Card>
);
export default CardComponent;
