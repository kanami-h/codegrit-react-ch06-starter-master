import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import HeartImg from '../../images/heart.png';
import HeartImgDark from '../../images/heart-gray.png';
import BubbleImg from '../../images/bubble.png';
import BubbleImgDark from '../../images/bubble-gray.png';
import BookmarkImg from '../../images/bookmark.png';
import BookmarkImgDark from '../../images/bookmark-gray.png';
import { FlexListContainer } from '../../Styled/flexboxUtils';

const CardMainIcons = styled.div({
  marginTop: '4px',
  height: '40px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

const IconItem = styled.li({
  marginRight: '5px',
})

const MainIcons = ({ theme }) => (
  <CardMainIcons className="card-main-icons">
    <FlexListContainer className="card-main-icons-left">
      <IconItem>
        <img
          alt="heart-icon"
          src={theme === 'light' ? HeartImg : HeartImgDark}
          height="30px"/>
      </IconItem>
      <IconItem>
        <img 
          alt="bubble-icon"
          src={theme === 'light' ? BubbleImg : BubbleImgDark}
          height="30px"/>
      </IconItem>
    </FlexListContainer>
    <FlexListContainer className="card-main-icons-right">
      <IconItem>
        <img 
          alt="bookmark-icon"
          src={theme === 'light' ? BookmarkImg : BookmarkImgDark}
          height="30px"/>
      </IconItem>
    </FlexListContainer>
  </CardMainIcons>
);

Comment.propTypes = {
  theme: PropTypes.string.isRequired
}

Comment.defaultProps = {
  theme: "light",
}

export default MainIcons;