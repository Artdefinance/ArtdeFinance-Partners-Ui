/* eslint-disable react/prop-types */
import React from 'react';
import './Buttons.scss';

export default class ButtonBlack extends React.Component {
  render() {
    const { content, className } = this.props;
    return (
      <button
        type="button"
        className={className}
      >
        {content}
      </button>
    );
  }
}
