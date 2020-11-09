import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const Comments = ({ data, theme }) => {
  const { comments } = data;
  console.log(comments)
  
  const sortedComments = comments.sort(function(a, b){
    const intA = parseInt(a, 10)
    const intB = parseInt(b, 10)
    console.log(intA, intB)
    return intA - intB;
  })

  console.log(sortedComments)

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