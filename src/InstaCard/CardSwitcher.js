import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';

const Link = styled.a({
  color: '#262626',
  cursor: 'pointer',
  ':hover': {
    color: '#36cfc9'
  }
}, ({ chosen }) => {
  const styles = [];
  if (chosen) {
    styles.push({ color: '#36cfc9' })
  }
  return styles;
})

const SwitherItem = styled.li({
  padding: '5px',
  marginBottom: '7px'
})

const CardSwitcher = ({ id, switchCard }) => (
  <ul className="theme-swither">
    <SwitherItem>
      <Link chosen={id === 1}
        onClick={(e) => switchCard(1, e)}>
        1枚目
      </Link>
    </SwitherItem>
    <SwitherItem>
      <Link chosen={id === 2}
        onClick={(e) => switchCard(2, e)}>
        2枚目
      </Link>
    </SwitherItem>
  </ul>
);

Comment.propTypes = {
  switchCard: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}

Comment.defaultProps = {
  id: 1,
}

export default CardSwitcher;