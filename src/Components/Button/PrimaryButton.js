/* eslint-disable react/prop-types */
import React from 'react';
import './Buttons.scss';

export default class PrimaryButton extends React.Component {
  render() {
    const { type, content, disabled, contentPadding } = this.props;
    const paddingStyle = {
      padding: contentPadding,
    };
    return (
      <button
        type="button"
        className={
          type === 'type1'
            ? 'primary-buttons primary-buttons--type1'
            : 'primary-buttons primary-buttons--type2'
        }
        style={paddingStyle}
        disabled={disabled === 'true' ? 'disabled' : null}
      >
        {content}
      </button>
    );
  }
}
