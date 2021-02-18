import React from 'react';
import { Row, Col, Typography } from 'antd';
import PropTypes from 'prop-types';

import Rating from '../Rating';
import MainButton from '../MainButton';
import UserImage from '../UserImage';
import './style.css';

const { Title, Text } = Typography;

const Comment = ({
  isAdmin,
  userName,
  commentText,
  date,
  rateValue,
  onAdminClick,
  ...otherProps
}) => (
  <div className="Comment" {...otherProps}>
    <Row justify="start">
      <Col id="avatar" span={5}>
        <Row>
          <UserImage size={64} userName={userName} />
        </Row>
        <Title level={5}>{userName}</Title>
      </Col>
      <Col span={19}>
        <Row className="top-container">
          <Rating rateValue={rateValue} />
          <Title level={3} id="comment-date">
            {date}
          </Title>
          {isAdmin && (
            <MainButton
              id="deleteBtn"
              isDelete
              size="small"
              onClick={onAdminClick}
            >
              حذف
            </MainButton>
          )}
        </Row>
        <Row>
          <Text id="Comment-des">{commentText}</Text>
        </Row>
      </Col>
    </Row>
  </div>
);

Comment.defaultProps = {
  isAdmin: false,
  onAdminClick: () => {},
};

Comment.propTypes = {
  userName: PropTypes.string.isRequired,
  commentText: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rateValue: PropTypes.number.isRequired,
  isAdmin: PropTypes.bool,
  onAdminClick: PropTypes.func,
};

export default Comment;
