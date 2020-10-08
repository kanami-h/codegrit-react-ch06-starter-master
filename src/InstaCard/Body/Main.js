import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import MainIcons from './MainIcons';
import Comments from './Comments';
import CommentBox from './CommentBox'

const CardMain = styled.section({
  padding: '0 16px',
})

const PostDate = styled.div({
  "marginBottom": "5px",
  "fontSize": "10px",
  "letterSpacing": ".2px",
  "color": "#999",
  "textTransform": "uppercase"
})

const BodyMain = ({ theme, chosenId, data }) => (
  <CardMain>
    <MainIcons theme={theme} />
    <div className="card-like-counts">100 likes</div>
    <Comments theme={theme} data={data} />
    <PostDate className="post-date">1日前</PostDate>
    <CommentBox chosenId={chosenId} />
  </CardMain>
);

Comment.propTypes = {
  theme: PropTypes.string.isRequired,
  chosenId: PropTypes.number.isRequired
}

Comment.defaultProps = {
  theme: "light",
  chosenId: 1,
}

export default BodyMain;