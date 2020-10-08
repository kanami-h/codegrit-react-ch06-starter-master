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

const ThemeSwitcher = ({ theme, switchTheme }) => (
  <ul className="theme-swither">
    <SwitherItem>
      <Link chosen={theme === 'light'}
        onClick={(e) => switchTheme('light', e)}>
        Light
      </Link>
    </SwitherItem>
    <SwitherItem>
      <Link chosen={theme === 'dark'} 
        onClick={(e) => switchTheme('dark', e)}>
        Dark
      </Link>
    </SwitherItem>
  </ul>
);

Comment.propTypes = {
  switchTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
}

Comment.defaultProps = {
  theme: "light",
}

export default ThemeSwitcher;