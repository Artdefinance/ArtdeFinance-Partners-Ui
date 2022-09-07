/* eslint-disable react/prop-types */
import React from 'react';
import './TextBox.scss';

export default class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      mainText,
      subText,
      borderBlack,
      borderRed,
      borderBlue,
      backgroundRed,
      backgroundBlue,
    } = this.props;
    return (
      <div
        className={
          (borderBlack ? 'text-box text-box--border-black' : null)
          || (borderRed ? 'text-box text-box--border-red' : null)
          || (borderBlue ? 'text-box text-box--border-blue' : null)
          || (backgroundRed ? 'text-box text-box--background-red' : null)
          || (backgroundBlue ? 'text-box text-box--background-blue' : null)
        }
      >
        <div>
          {mainText ? <p className="text-box__main-text">{mainText}</p> : null}
          {subText ? <p className="text-box__sub-text">{subText}</p> : null}
        </div>
      </div>
    );
  }
}
