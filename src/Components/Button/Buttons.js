/* eslint-disable react/prop-types */
import React from 'react';
import './Buttons.scss';

export default class Buttons extends React.Component {
  render() {
    const { className, content, disabled, type } = this.props;
    return (
      <button
        className={
          className + (type === 'type1' ? ' buttons--type1' : ' buttons--type2')
        }
        type="button"
        disabled={disabled === 'true' ? 'disabled' : null}
      >
        {content}
      </button>
    );
  }
}
