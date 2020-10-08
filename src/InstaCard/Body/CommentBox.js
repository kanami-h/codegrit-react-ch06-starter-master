import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';

const CommentBoxWrapper = styled.section({
  "borderTop": "1px solid #efefef",
  "color": "#999",
  "minHeight": "56px",
  "display": "flex",
  "alignItems": "center",
  "fontSize": "0.9em"
})

export default class extends Component {
  static propTypes = {
    chosenId: PropTypes.number
  }
  static defaultProps = {
    chosenId: 1
  }
  state = {
    comment: "実はコメントを書いているところです。"
  }
  componentDidUpdate(prevProps) {
    if (prevProps.chosenId !== this.props.chosenId) {
      this.setState({
        comment: ''
      })
    }
  }

  render() {
    const { comment } = this.state;
    return (
      <CommentBoxWrapper>
        <div className="comment-area">{comment === '' ? "コメントする" : comment}</div>
      </CommentBoxWrapper>
    );
  }
}