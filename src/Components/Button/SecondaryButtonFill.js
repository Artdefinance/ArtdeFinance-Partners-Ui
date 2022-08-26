/* eslint-disable react/prop-types */
import React from 'react';
import './Buttons.scss';

export default class SecondaryButtonFill extends React.Component {
  render() {
    const { content, contentPadding } = this.props;
    const paddingStyle = {
      padding: contentPadding,
    };
    return (
      <button
        type="button"
        className="secondary-button secondary-button--fill"
        style={paddingStyle}
      >
        {content}
      </button>
    );
  }
}
