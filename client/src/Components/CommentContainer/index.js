import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import PropTypes from 'prop-types';
import Comment from '../Common/Comment';
import MainButton from '../Common/MainButton';

const CommentContainer = ({ data, isAdmin }) => {
  const [commentsToShow, setCommentsToShow] = useState([]);
  const [next, setNext] = useState(3);
  const commentsPerPage = 3;

  const loopWithSlice = (start, end) => {
    const slicedComments = data.slice(start, end);
    setCommentsToShow([...commentsToShow, ...slicedComments]);
  };

  const handleShowMoreComments = () => {
    loopWithSlice(next, next + commentsPerPage);
    setNext(next + commentsPerPage);
  };

  useEffect(() => {
    loopWithSlice(0, commentsPerPage);
  }, []);

  return (
    <div>
      <List
        split={false}
        itemLayout="horizontal"
        dataSource={commentsToShow}
        renderItem={(item) => (
          <List.Item>
            <Comment
              isAdmin={isAdmin}
              userName={item.userName}
              commentText={item.commentText}
              date={item.date}
              rateValue={item.rateValue}
            />
          </List.Item>
        )}
      />
      {commentsToShow.length < data.length && (
        <MainButton onClick={handleShowMoreComments}>
          عرض المزيد من التعليقات
        </MainButton>
      )}
    </div>
  );
};

CommentContainer.defaultProps = {
  data: [],
};

CommentContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      isAdmin: PropTypes.bool,
      userName: PropTypes.string,
      commentText: PropTypes.string,
      date: PropTypes.string,
      rateValue: PropTypes.number,
    })
  ),
  isAdmin: PropTypes.bool.isRequired,
};

export default CommentContainer;
