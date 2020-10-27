import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const Comments = ({ data, theme }) => {
  const { comments } = data;
  let postSort = data.comments.postedAt;

  postSort.sort(function(one, two){
    return one - two;
  })

  console.log()


  return (
    <ul className="comments">
      <Comment
        theme={theme}
        username={comments.poster}
        comment={comments.body} />
      <Comment
        theme={theme}
        username={comments.poster}
        comment={comments.body} />
    </ul>
  );
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