import React from 'react';
import styled from '@emotion/styled/macro';
import Avatar from '../images/avatar-one.png';
import PropTypes from 'prop-types';

const CardHeaderWrapper = styled.section({
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid #efefef',
  padding: '16px',
  height: '60px'
})

const PosterAvatarWrapper = styled.div({
  marginRight: 12,
})

const PosterAvater = styled.img({
  borderRadius: '50%',
  border: '1px solid #dddddd',
  height: '30px',
  width: '30px',
})

const Header = ({ data }) => (
  <CardHeaderWrapper>
    <PosterAvatarWrapper>
      <PosterAvater alt="アバター" src={data.posterAvatar} />
    </PosterAvatarWrapper>
    <div className="poster-name">
      {data.poster}
    </div>
  </CardHeaderWrapper>
);

Header.propTypes = {
  data: PropTypes.object
}

Header.defaultProps = {
  data: {
    posterAvatar: Avatar,
    poster: "testposter"
  }
}

export default Header;