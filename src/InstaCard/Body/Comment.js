import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';

const CommenterName = styled.a({
}, ({ theme }) => {
  const styles = [];
  if (theme === 'dark') {
    styles.push({ color: '#999' })
  }
  return styles;
})

const Comment = ({ username, comment, theme }) => (
  <li className="poster-comment">
    <CommenterName theme={theme}>
      {username}
    </CommenterName>
    <span className="commenter-comment">
      {comment}
    </span>
  </li>
);

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired
}

Comment.defaultProps = {
  username: "testuser",
  comment: "テストのコメント",
  theme: 'light',
}

export default Comment;
