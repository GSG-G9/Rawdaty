import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import PropTypes from 'prop-types';
import Comment from '../Comment';
import MainButton from '../MainButton';

const commentsPerPage = 5;
let arrayForHoldingComments = [];
const CommentContainer = ({ data }) => {
  const [commentsToShow, setCommentsToShow] = useState([]);
  const [next, setNext] = useState(5);

  const loopWithSlice = (start, end) => {
    const slicedComments = data.slice(start, end);
    arrayForHoldingComments = [...arrayForHoldingComments, ...slicedComments];
    setCommentsToShow(arrayForHoldingComments);
  };

  useEffect(() => {
    loopWithSlice(0, commentsPerPage);
  }, []);

  const handleShowMoreComments = () => {
    loopWithSlice(next, next + commentsPerPage);
    setNext(next + commentsPerPage);
  };
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={commentsToShow}
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
      {commentsToShow.length !== data.length ? (
        <MainButton onClick={handleShowMoreComments}>
          عرض المزيد من التعليقات
        </MainButton>
      ) : (
        <MainButton backgroundColor="#ABC4C1">عرض من التعليقات</MainButton>
      )}
    </div>
  );
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
  ).isRequired,
};
export default CommentContainer;
