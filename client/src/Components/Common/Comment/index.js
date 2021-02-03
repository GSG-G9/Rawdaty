import React from 'react';
import { Avatar, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import Rating from '../Rating';
import MainButton from '../MainButton';

import './style.css';

const Comment = ({
  id,
  isAdmin,
  userName,
  maxWidth,
  commentText,
  date,
  rateValue,
  onAdminClick,
}) => (
  <div id={id} className="Comment" style={{ maxWidth }}>
    <Row justify="start">
      <Col id="avatar" span={4}>
        <Avatar size={64} name={userName} />
        {/* <UserImage userName={userName} /> */}
      </Col>
      <Col span={20}>
        <Col span={24}>
          <Rating rateValue={rateValue} />
          <span id="comment-date">{date}</span>
          {isAdmin && (
            <MainButton
              id="deleteBtn"
              isDelete
              size="small"
              onClick={onAdminClick}
            >
              حدف
            </MainButton>
          )}
        </Col>
        <Col span={24}>
          <p id="Comment-des">{commentText}</p>
        </Col>
      </Col>
    </Row>
  </div>
);

Comment.defaultProps = {
  isAdmin: false,
  maxWidth: '500px',
  onAdminClick: () => {},
};

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  commentText: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rateValue: PropTypes.number.isRequired,
  isAdmin: PropTypes.bool,
  maxWidth: PropTypes.string,
  onAdminClick: PropTypes.func,
};

export default Comment;
