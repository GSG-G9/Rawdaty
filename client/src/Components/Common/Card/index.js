import React from 'react';
// import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';

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
      avatar={
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      }
      title="روضة الفجر النموذجية"
      description={
        <span>
          <span> غزة-فلسطين</span>
          <span />
          <span>200-500 شيكل</span>
        </span>
      }
    />
  </Card>
);
export default CardComponent;
