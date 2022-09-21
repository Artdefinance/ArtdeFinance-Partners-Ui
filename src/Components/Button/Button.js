/* eslint-disable react/prop-types */
import React from 'react';
import './Buttons.scss';

export default class Button extends React.Component {
  render() {
    const { className, content, disabled, type, pressFucn } = this.props;
    return (
      <button
        onClick={() => {
          if (pressFucn !== undefined) {
            pressFucn();
          }
        }}
        className={
          className + (type === 'type1' ? ' button--type1' : ' button--type2')
        }
        type="button"
        disabled={disabled === 'true' ? 'disabled' : null}
      >
        {content}
      </button>
    );
  }
}
