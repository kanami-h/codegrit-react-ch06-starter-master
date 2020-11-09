import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const Comments = ({ data, theme }) => {
  const { comments } = data;

  const sortedComments = comments.sort(function(a, b){
    console.log(a, b)
    const intA = parseInt(a)
    const intB = parseInt(b)
    return intA - intB;
  })

  let comment = sortedComments.map((comment) => {
    return (
      <ul className="comments">
        <Comment
          theme={theme}
          username={comments.poster}
          comment={comments.body}
          key={comment.postedAt} 
          />
      </ul>
    );
  })
  return comment
};

Comments.propTypes = {
  theme: PropTypes.string.isRequired,
  data: PropTypes.object
}

Comments.defaultProps = {
  theme: 'light',
  data: {
    comments: {
      poster: "posterone",
      body: "This is the insta-card"
    },
  }
}


export default Comments;