/** @jsx jsx */

import React, { Component } from 'react';
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled/macro';
import Header from './Header';
import Body from './Body';
import ThemeSwitcher from './ThemeSwitcher';
import CardSwitcher from './CardSwitcher'
import { ReactComponent as LoadingImg } from '../images/loading.svg';
import { fetchData } from '../CardDataUtils';

const InstaCard = styled.article({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '614px',
  width: '100%',
  border: '1px solid #e6e6e6',
  borderRadius: '5px',
}, ({ theme }) => {
  const styles = [];
  if (theme === 'dark') {
    styles.push({
      backgroundColor: '#262626',
      color: '#999'
    })
  }
  return styles
})

const EmptyBox = () => {

  const loaderWrapperStyle = {
    label: 'loader-wrapper',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  }
  return (
    <InstaCard css={{ height: 600 }}>
      <div css={loaderWrapperStyle}>
        <LoadingImg />
      </div>
    </InstaCard>
  );
}

export default class extends Component {
  state = {
    theme: 'light',
    loading: true,
    loadedOnce: false,
    data: null,
    chosenId: 1
  }

  componentDidMount() {
    fetchData().then((data) => {
      this.setState({ loading: false, data })
    })
  }

  onSwitchTheme = (theme, e = null) => {
    if (e) e.preventDefault();
    this.setState({ theme })
  }

  onSwitchCard = (id, e = null) => {
    if (e) e.preventDefault();
    const { data } = this.state;
    if (!data || data.id === id) return
    this.setState({
      loading: true,
      chosenId: id,
    })
    fetchData(id).then((data) => {
      this.setState({ 
        loading: false, data,
        loadedOnce: true
      })
    })
  }

  render() {
    const { 
      theme, 
      loading, 
      data, 
      chosenId, 
      loadedOnce 
    } = this.state;
    let articlePart;
    if (loading && loadedOnce === false) {
      articlePart = <EmptyBox />;
    } else {
      articlePart = (
        <InstaCard theme={theme}>
          <Header theme={theme} data={data} />
          <Body theme={theme} data={data} chosenId={chosenId} />
        </InstaCard>
      );
    }
    return (
      <div className="card-wrapper">
        <div css={{ marginBottom: 7 }}>
          <p>- テーマを選択してください。</p>
          <ThemeSwitcher 
            theme={theme}
            switchTheme={this.onSwitchTheme} />
        </div>
        <div css={{ marginBottom: 14 }}>
          <p>- 表示するカードを選択してください。</p>
          <CardSwitcher id={chosenId} switchCard={this.onSwitchCard} />
        </div>
        {articlePart}
      </div>
    );
  }
}