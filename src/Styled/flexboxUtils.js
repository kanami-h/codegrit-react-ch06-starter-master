import styled from '@emotion/styled/macro';

export const FlexListContainer = styled.ul({
  display: 'flex'
}, ({ direction }) => {
  const styles = [];
  if (direction === 'column') {
    styles.push({
      flexDirection: 'column'
    })
  }
  return styles;
})

