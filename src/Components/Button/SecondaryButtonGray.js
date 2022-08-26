/* eslint-disable react/prop-types */
import React from 'react';
import './Buttons.scss';

export default class SecondaryButtonGray extends React.Component {
  render() {
    const { content, contentPadding } = this.props;
    const paddingStyle = {
      padding: contentPadding,
    };
    return (
      <button
        type="button"
        className="secondary-button secondary-button--gray"
        style={paddingStyle}
      >
        {content}
      </button>
    );
  }
}
