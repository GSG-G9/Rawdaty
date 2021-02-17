import React, { useState } from 'react';
// import { List } from 'antd';
import PropTypes from 'prop-types';
import Comment from '../Common/Comment';
import MainButton from '../Common/MainButton';

const CommentContainer = ({ data, isAdmin }) => {
  const commentsPerPage = 3;
  const [limit, setLimit] = useState(commentsPerPage);

  const handleShowMoreComments = () => {
    setLimit(commentsPerPage + limit);
  };

  return (
    <div>
      <ul>
        {data.length !== 0 ? (
          data.slice(0, limit).map((item) => (
            <li key={item.id}>
              <Comment
                isAdmin={isAdmin}
                userName={item.user_name}
                commentText={item.comment}
                date={item.create_at}
                rateValue={item.rating}
              />
            </li>
          ))
        ) : (
          <Comment description="لا يوجد رياض أطفال" />
        )}
      </ul>

      {data.length > limit && (
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
