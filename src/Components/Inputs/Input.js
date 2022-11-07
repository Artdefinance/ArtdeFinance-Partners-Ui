/* eslint-disable react/prop-types */
import React from 'react';
import './Input.scss';
import Icons from '../Icons/Icons';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isClearButton: false,
      textValue: '',
    };
    this.showCloseButton = this.showCloseButton.bind(this);
    this.clearText = this.clearText.bind(this);
    this.inputTarget = React.createRef();
  }

  showCloseButton(e) {
    if (e.target.value === '') {
      this.setState(() => ({
        [e.target.name]: false,
        isClearButton: false,
        value: '',
      }));
    }
    if (e.target.value !== '') {
      this.setState(() => ({
        value: e.target.value,
        isClearButton: true,
        textValue: e.target.value,
      }));
    }
    if (e.target.value && [e.target.name]) {
      this.setState(() => ({
        [e.target.name]: true,
        isClearButton: true,
      }));
    }
  }

  clearText() {
    this.setState(() => ({
      isClearButton: false,
    }));

    this.inputTarget.current.value = '';
  }

  render() {
    const { value, isClearButton, textValue } = this.state;
    const { name, disabled, placeholder, getValue } = this.props;
    return (
      <div className={disabled === 'true' ? 'input disabled' : 'input'}>
        <div className="input__input-box">
          {disabled === 'true' ? (
            <input
              type="text"
              className="input__input"
              placeholder={placeholder}
              name={name}
              onChange={this.showCloseButton}
              value={value}
              disabled
            />
          ) : (
            <div>
              {getValue === '' ? (
                <input
                  type="text"
                  className="input__input"
                  placeholder={placeholder}
                  name={name}
                  onChange={this.showCloseButton}
                  value={value}
                />
              ) : (
                <input
                  type="text"
                  className="input__input"
                  placeholder={placeholder}
                  name={name}
                  onChange={this.showCloseButton}
                  value={getValue}
                  ref={this.inputTarget}
                />
              )}
            </div>
          )}
          {isClearButton ? (
            <button type="button" onClick={this.clearText} name={name}>
              <Icons shape="close-circle" />
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}
