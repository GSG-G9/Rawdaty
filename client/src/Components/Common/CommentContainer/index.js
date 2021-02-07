import React from 'react';
import { List } from 'antd';
import PropTypes from 'prop-types';
import Comment from '../Comment';

const CommentContainer = ({ data }) => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Comment
          isAdmin={item.isAdmin}
          userName={item.userName}
          commentText={item.commentText}
          date={item.date}
          rateValue={item.rateValue}
        />
      </List.Item>
    )}
  />
);

CommentContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      isAdmin: PropTypes.bool,
      userName: PropTypes.string,
      commentText: PropTypes.string,
      date: PropTypes.string,
      rateValue: PropTypes.number,
    })
  ).isRequired,
};
export default CommentContainer;
